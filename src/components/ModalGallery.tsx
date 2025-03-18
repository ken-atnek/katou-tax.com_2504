'use client';
import Image, { StaticImageData } from 'next/image';
import img1 from '@/assets/images/work/image01.webp';
import img2 from '@/assets/images/work/image02.webp';
import img3 from '@/assets/images/work/image03.webp';
import img4 from '@/assets/images/work/image04.webp';
import { useEffect, useState } from 'react';
import styles from '@/styles/components/ModalGallery.module.scss';
const images: StaticImageData[] = [img1, img2, img3, img4];

const ModalGallery = () => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModal = (image: StaticImageData) => {
    if (!isMobile) {
      setSelectedImage(image);
      setTimeout(() => setIsModalVisible(true), 10);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className={styles.blockImage}>
      <div className={styles.itemSlideImage}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              loading="lazy"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className={`${styles.modalOverlay} ${isModalVisible ? styles.show : styles.hide}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div>
            <div>
              <Image src={selectedImage} alt="Selected" fill loading="lazy" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalGallery;
