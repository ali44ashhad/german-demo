import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme";

/**
 * Light/dark theme switcher. Matches header language-button chrome.
 */
const ThemeToggle = ({ className = "" }) => {
  const { t } = useTranslation("common");
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const label = isDark
    ? t("header.theme_to_light", "Switch to light theme")
    : t("header.theme_to_dark", "Switch to dark theme");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-white/90 border border-gray-200 text-gray-800 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 dark:bg-slate-800/90 dark:border-slate-600 dark:text-slate-100 dark:focus:ring-sky-700 ${className}`}
    >
      {isDark ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
