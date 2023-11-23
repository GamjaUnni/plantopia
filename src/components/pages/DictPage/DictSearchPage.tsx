import { useState } from "react";

const DictSearchPage = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <div className="wrapper">
            <main className="search">
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
                            placeholder="식물 이름으로 검색하기"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button>
                            <span className="hide">검색</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default DictSearchPage;
