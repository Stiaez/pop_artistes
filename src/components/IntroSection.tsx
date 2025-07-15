import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadForm from './DownloadForm';
import './css/IntroSection.css';

const MotionTypography = motion(Typography);

export default function IntroSection() {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative md:sticky top-0 h-screen hidden md:block bg-[#292727]">
                <img
                    src="/white_paper/1.jpg"
                    alt="White Paper"
                    className="object-contain h-full w-full p-10"
                />
            </div>

            <div className="overflow-y-auto px-6 py-10 text-white max-h-screen text-center">
                <MotionTypography
                    className="title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {t('title')}
                </MotionTypography>

                <div className="mt-6">
                    <MotionTypography className="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        {t('descriptionPartOne')}
                    </MotionTypography>
                </div>

                <MotionTypography className="text mt-6" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}}>
                    {t('descriptionPartTwo')}
                </MotionTypography>

                <div className="mt-4 mb-6">
                    <MotionTypography className="text-bold mt-6" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.8}}>
                        {t('descriptionPartThree')}
                    </MotionTypography>
                </div>

                <MotionTypography className="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                    {t('descriptionPartFour')}
                </MotionTypography>

                <div className="mt-2 mb-2">
                    <MotionTypography className="text" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.2}}>
                        {t('descriptionPartFive')}
                    </MotionTypography>
                </div>

                <MotionTypography className="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                    {t('descriptionEnd')}
                </MotionTypography>

                <DownloadForm />
            </div>
        </section>
    );
}