import { SyntheticEvent } from "react";
import styles from "./Form.module.scss";
import { useRouter, usePathname } from "next/navigation";


const Form = ({ dict }: { dict: any }) => {
    const router = useRouter();
    const pathname = usePathname();


    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchParams = new URLSearchParams();
        searchParams.append("sort_by", form.get("sort") as string);
        searchParams.append("release_date.gte", form.get("fromDate") as string);
        searchParams.append("release_date.lte", form.get("toDate") as string);

        router.push(`${pathname}?${searchParams.toString()}`);
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h2>{dict.searchSidebar.filter}</h2>
            <div className={styles.date}>
                <h3>{dict.searchSidebar.releaseDate}</h3>
                <div>
                    <p>{dict.searchSidebar.from}</p>
                    <input type="date" name="fromDate" />
                </div>
                <div>
                    <p>{dict.searchSidebar.to}</p>
                    <input type="date" name="toDate" defaultValue={new Date().toISOString().substring(0, 10)} />
                </div>
            </div>
            <div>
                <h3>{dict.searchSidebar.filterBy}</h3>
                <select name="sort">
                    <option value="popularity.desc">{dict.searchSidebar.popularity}</option>
                    <option value="vote_average.desc">{dict.searchSidebar.score}</option>
                    <option value="cote_count.desc">{dict.searchSidebar.scoreNumber}</option>
                </select>
            </div>
            <input type="submit" value={dict.searchSidebar.search} />
        </form>
    );
};

export default Form;