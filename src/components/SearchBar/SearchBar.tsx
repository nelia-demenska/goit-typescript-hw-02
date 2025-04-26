import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
        toast.error("Please enter a search term!");
        return;
    }

    onSearch(searchQuery);
    setSearchQuery("");
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    };

    return (
    <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.searchbar}>
        <button className={css.button} type="submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
        </button>
        <input
            type="text"
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleInputChange}
        />
        </form>
    </header>
    );
}