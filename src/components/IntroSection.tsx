import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadForm from './DownloadForm';
import './css/IntroSection.css';

const MotionTypography = motion(Typography);

export default function IntroSection() {
    const { t } = useTranslation();

    const [mobileImageIndex, setMobileImageIndex] = useState(1);

    const [desktopImageIndex, setDesktopImageIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setMobileImageIndex((prev) => (prev % 3) + 1);
            setDesktopImageIndex((prev) => (prev % 3) + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative md:sticky top-0 h-screen hidden md:flex flex-col justify-center items-center">
                <img
                    src="/white_paper/cover_page.jpg"
                    alt="White Paper Cover"
                    className="object-contain w-full"
                />
                <img
                    src={`/white_paper/book_open_${desktopImageIndex}.jpg`}
                    alt={`White Paper Page ${desktopImageIndex}`}
                    className="object-contain w-full"
                />
            </div>

            <div className="overflow-y-auto px-6 py-10 text-black max-h-screen">
                <div className="md:hidden w-full">
                    <img
                        src={`/white_paper/white_paper_${mobileImageIndex}.jpg`}
                        alt={`White Paper Mobile ${mobileImageIndex}`}
                        className="object-contain w-full"
                    />
                </div>
                <MotionTypography
                    className="title mb-10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {t('title')}
                </MotionTypography>

                <div className="mt-6">
                    <MotionTypography
                        className="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {t('descriptionPartOne')}
                    </MotionTypography>
                </div>

                <div className="mt-6">
                    <MotionTypography
                        className="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {t('descriptionPartTwo')}
                    </MotionTypography>
                </div>

                <div className="mt-10">
                    <MotionTypography
                        className="text-bold text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {t('descriptionPartThree')}
                    </MotionTypography>
                </div>

                <div className="mt-10">
                    <MotionTypography
                        className="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                    >
                        {t('descriptionPartFour')}
                    </MotionTypography>
                </div>

                <div className="mt-4">
                    <MotionTypography
                        className="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {t('descriptionPartFive')}
                    </MotionTypography>
                </div>

                <div className="mt-4 mb-8">
                    <MotionTypography
                        className="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        {t('descriptionEnd')}
                    </MotionTypography>
                </div>

                <DownloadForm />
            </div>
        </section>
    );
}