import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    return (
        <div className="w-full px-6 py-4 flex justify-end z-30 relative">
            <LanguageSwitcher />
        </div>
    );
}