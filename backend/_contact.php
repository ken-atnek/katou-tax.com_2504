<?php
header("Access-Control-Allow-Origin: *"); // CORS対策
header("Content-Type: application/json");

// フォームデータを受け取る
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	$name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
	$email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
	$message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

	if (empty($name) || empty($email) || empty($message)) {
		echo json_encode(["success" => false, "error" => "全ての項目を入力してください"]);
		exit;
	}

	// 📩 **メールの設定**
	$to = "ken@ikc-s.ne.jp";  
	$to_name = "加藤誠貴税理士事務所";
	$send_date = date("Y/n/j-H:i", time());

	#元のエンコーディングを保存
	$orgEncoding = mb_internal_encoding();
	mb_language("uni");
	mb_internal_encoding('UTF-8');

	$header_from = 'From: "' . $name . '"<' . $email . '>';
	#メール本体作成
	$subject    = 'お問い合せがありました';
	$mail_body  = '';
	$mail_body .= 'お問い合わせフォームより' . "\n";
	$mail_body .= '--------------------' . "\n";
	$mail_body .= '■お名前' . "\n";
	$mail_body .= $name . ' 様' . "\n";
	$mail_body .= "\n";
	$mail_body .= '◎メールアドレス' . "\n";
	$mail_body .= $email . "\n";
	$mail_body .= '--------------------' . "\n";
	$mail_body .= '【お問い合わせ内容】' . "\n";
	$mail_body .= $message . "\n";
	$mail_body .= "\n";
	$mail_body .= '--------------------' . "\n";
	$mail_body .= $send_date . "\n";
	$mail_body  = str_replace("\r\n", "\n", $mail_body);
	
	#宛先店舗名称
	$to_name = mb_encode_mimeheader($to_name, 'ISO-2022-JP');
	#宛先店舗メアド
	$send_to     = $to;
	$send_target = $to_name . ' <' . $send_to . '>';



	#送信

	$rslt  = mb_send_mail($send_target, $subject, $mail_body, $header_from, "-f$email");


	#保存しておいたエンコーディングに戻す
	mb_internal_encoding($orgEncoding);
	#var_dump($re_mail_body); exit();



	echo json_encode(["success" => true, "message" => "メール送信成功！" . 	$send_target]);
	// echo json_encode(["success" => true, "message" => "メール送信成功！" . 	$mail_body]);

	// if (mail($to, $subject, $body, $headers)) {
	// 	// error_log("成功: メール送信に成功しました", 3, "/Users/ken/Desktop/error_log.txt");
	// 	echo json_encode(["success" => true, "message" => "メール送信成功！" . $body]);
	// } else {
	// 	// error_log("エラー: メール送信に失敗しました", 3, "/Users/ken/Desktop/error_log.txt");
	// 	echo json_encode(["success" => false, "error" => "メール送信に失敗しました" . $body]);
	// }
} else {
	// error_log("エラー: 無効なリクエスト", 3, "/Users/ken/Desktop/error_log.txt");
	echo json_encode(["success" => false, "error" => "無効なリクエスト"]);
}
