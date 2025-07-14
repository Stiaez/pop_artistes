import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

export default function IntroSection() {
    const { t } = useTranslation();

    return (
        <Box
            className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-20 py-10"
        >
            <Box className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/white_paper/1.jpg"
                    alt="White Paper"
                    className="max-w-[500px] w-full h-auto"
                />
            </Box>

            <Box className="w-full md:w-1/2 text-white text-left space-y-4">
                <Typography variant="h4" component="h2" className="font-serif">
                    {t('title')}
                </Typography>
                <Typography>{t('descriptionPartOne')}</Typography>
                <Typography>{t('descriptionPartTwo')}</Typography>
                <Typography>{t('descriptionPartThree')}</Typography>
                <Typography>
                    <strong>{t('descriptionPartFour')}</strong>
                </Typography>
                <Typography>{t('descriptionPartFive')}</Typography>
                <Typography>{t('descriptionEnd')}</Typography>
            </Box>
        </Box>
    );
}