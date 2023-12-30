import { useState } from "react";

import Plant4 from "@/assets/images/plant4.png";

const DictSearchPage = () => {
    const [search, setSearch] = useState<string>("");
    const onSearch = () => {
        console.log("search", search);
    }

    return (
        <div className="wrapper">
            <main className="search empty_footer">
                <header className="sub_header">
                    <button className="back_btn">
                        <span className="hide">뒤로가기</span>
                    </button>
                    <strong>검색 결과</strong>
                </header>

                <section className="search_wrap container">
                    <div className="search_inp">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={onSearch}>
                            <span  className="hide">검색</span>
                        </button>
                    </div>
                </section>

                <section className="search_list">
                    <ul>
                        {/* <li className="no_data">
                            <p>검색 결과가 없습니다.</p>
                            <a href="#none">
                                내가 찾는 식물이 없다면, 식물 등록 요청하기
                            </a>
                        </li> */}
                        <li>
                            <img src={Plant4} alt="thumbnail" />
                            <div>
                                <strong>감나무</strong>
                                <span>Admenium obesum</span>
                            </div>
                        </li>
                        <li>
                            <img src={Plant4} alt="thumbnail" />
                            <div>
                                <strong>감나무</strong>
                                <span>Admenium obesum</span>
                            </div>
                        </li>
                        <li>
                            <img src={Plant4} alt="thumbnail" />
                            <div>
                                <strong>감나무</strong>
                                <span>Admenium obesum</span>
                            </div>
                        </li>
                        <li>
                            <img src={Plant4} alt="thumbnail" />
                            <div>
                                <strong>감나무</strong>
                                <span>Admenium obesum</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};
export default DictSearchPage;
