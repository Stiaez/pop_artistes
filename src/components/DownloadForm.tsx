import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    TextField,
    Button,
    MenuItem,
    Select,
    FormControl,
    Typography,
    Box
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

export default function DownloadForm() {
    const { t, i18n } = useTranslation();

    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        profession: '',
        email: '',
    });

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name!]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formUrl = 'https://formsubmit.co/ajax/stiaez72@gmail.com';
        const payload = { ...formData };

        try {
            const response = await fetch(formUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const link = document.createElement('a');
                link.href = i18n.language === 'fr' ? '/white_paper/pdf/lb_dancing_fr.pdf' : '/white_paper/pdf/lb_dancing_en.pdf';
                link.download = i18n.language === 'fr' ? 'LivreBlanc.pdf' : 'WhiteBook.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        } catch (error) {
            alert('Erreur réseau.');
            console.error(error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10 flex flex-col gap-5">

            <Typography variant="h5" className="text-black font-semibold">
                {t('formTitle')}
            </Typography>

            <Typography className="font-bold text-black">{t('lastName')} *</Typography>
            <TextField
                placeholder={t('lastName')}
                name="lastName"
                value={formData.lastName}
                onChange={handleTextChange}
                required
                fullWidth
                size="small"
                sx={{ backgroundColor: 'white' }}
            />

            <Typography className="font-bold text-black">{t('firstName')} *</Typography>
            <TextField
                placeholder={t('firstName')}
                name="firstName"
                value={formData.firstName}
                onChange={handleTextChange}
                required
                fullWidth
                size="small"
                sx={{ backgroundColor: 'white' }}
            />

            <Typography className="font-bold text-black">{t('profession')} *</Typography>
            <FormControl required fullWidth size="small" sx={{ backgroundColor: 'white' }}>
                <Select
                    name="profession"
                    value={formData.profession}
                    onChange={handleSelectChange}
                    displayEmpty
                >
                    <MenuItem value="">{`-- ${t('select')} --`}</MenuItem>
                    <MenuItem value="artiste">{t('professionOptions.artist')}</MenuItem>
                    <MenuItem value="manager">{t('professionOptions.manager')}</MenuItem>
                    <MenuItem value="rp">{t('professionOptions.rp')}</MenuItem>
                    <MenuItem value="autre">{t('professionOptions.other')}</MenuItem>
                </Select>
            </FormControl>

            <Typography className="font-bold text-black">{t('email')} *</Typography>
            <TextField
                placeholder={t('email')}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleTextChange}
                required
                fullWidth
                size="small"
                sx={{ backgroundColor: 'white' }}
            />

            <Button
                type="submit"
                variant="contained"
                className="bg-black text-black hover:bg-gray-800"
            >
                {t('download')}
            </Button>
        </Box>
    );
}