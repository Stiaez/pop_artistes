import { useTranslation } from 'react-i18next';
import { Select, MenuItem, Box } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event: SelectChangeEvent) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Box
            className="absolute top-5 right-5 z-50"
            sx={{
                backgroundColor: '#111',
                border: '1px solid #444',
                borderRadius: '4px',
                color: 'white',
                minWidth: 120,
            }}
        >
            <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                variant="standard"
                disableUnderline
                sx={{
                    color: 'white',
                    '& .MuiSelect-icon': { color: 'white' },
                    padding: '4px 10px',
                }}
            >
                <MenuItem value="fr">🇫🇷 Français</MenuItem>
                <MenuItem value="en">🇬🇧 English</MenuItem>
            </Select>
        </Box>
    );
}