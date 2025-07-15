import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import DownloadForm from './DownloadForm';

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

            <div className="overflow-y-auto px-6 py-10 text-white space-y-4 max-h-screen">
                <Typography variant="h4" component="h2" className="font-serif">
                    {t('title')}
                </Typography>
                <Typography>{t('descriptionPartOne')}</Typography>
                <Typography>{t('descriptionPartTwo')}</Typography>
                <Typography>{t('descriptionPartThree')}</Typography>
                <Typography className="font-bold">
                    {t('descriptionPartFour')}
                </Typography>
                <Typography>{t('descriptionPartFive')}</Typography>
                <Typography>{t('descriptionEnd')}</Typography>

                <DownloadForm />
            </div>
        </section>
    );
}