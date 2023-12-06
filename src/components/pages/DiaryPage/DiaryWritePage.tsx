import { useState } from "react";
import "./DiaryPage.scss";
import { nanoid } from "nanoid";

// import Plant5 from "@/assets/images/plant5.jpg";

const DiaryWritePage = () => {
    const [value, setValue] = useState("");
    const [visibility, setVisibility] = useState(false);
    const closeOption = () => {
        if (visibility) {
            toggleVisivility();
        }
    };
    const toggleVisivility = () => setVisibility(!visibility);

    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [thumbnailImage, setThumbnailImage] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (thumbnailImage && thumbnailImage?.length > 2) {
            alert("이미지는 3개까지 등록 가능합니다.");
            return;
        }
        const file = event.target.files?.[0];

        if (file) {
            setUploadedFile(file);

            const reader = new FileReader();
            reader.onload = async () => {
                try {
                    const thumbnail = await generateThumbnail(
                        reader.result as string
                    );
                    setThumbnailImage((prev) => {
                        if (prev) {
                            return [...prev, thumbnail];
                        } else {
                            return [thumbnail];
                        }
                    });
                } catch (error) {
                    console.error("Error generating thumbnail:", error);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const generateThumbnail = async (imageDataUrl: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = imageDataUrl;

            image.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                if (!ctx) {
                    reject(new Error("Could not get 2D context"));
                    return;
                }

                const aspectRatio = image.width / image.height;
                const thumbnailWidth = 100; // 조절 가능한 원하는 크기로 설정

                canvas.width = thumbnailWidth;
                canvas.height = thumbnailWidth / aspectRatio;

                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                resolve(canvas.toDataURL("image/png"));
            };

            image.onerror = (error) => reject(error);
        });
    };

    const dropThumbnail = (idx: number) => {
        if (idx > -1) {
            setThumbnailImage((prev) => {
                const copy = [...prev];
                copy.splice(idx, 1);
                return copy;
            });
        }
    };

    return (
        <div className="wrapper" onClick={closeOption}>
            <main className="diary empty_footer">
                <header className="sub_header">
                    <strong>글쓰기</strong>
                    <button className="close_btn">
                        <span className="hide">닫기</span>
                    </button>
                </header>
                <section className="img_file_wrap container">
                    <input
                        type="file"
                        id="file"
                        className="hide"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    <label htmlFor="file">{thumbnailImage?.length} / 3</label>

                    {thumbnailImage.map((thumbnail, idx) => (
                        <div className="img_wrap" key={nanoid()}>
                            <img src={thumbnail} alt="thumbnail" />
                            <button onClick={() => dropThumbnail(idx)}>
                                <span className="hide">삭제</span>
                            </button>
                        </div>
                    ))}
                </section>

                <section className="form_wrap">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="제목을 입력하세요."
                    />
                    <div className="select_box">
                        <button
                            className={visibility ? "select on" : "select"}
                            onClick={toggleVisivility}
                        >
                            식물을 선택하세요.
                        </button>
                        <ul
                            className={visibility ? "on" : ""}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <li>
                                <input
                                    type="checkbox"
                                    id="chk01"
                                    className="ch_check hide"
                                />
                                <label htmlFor="chk01" className="label">
                                    쑥쑥이
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id="chk02"
                                    className="ch_check hide"
                                />
                                <label htmlFor="chk02" className="label">
                                    몬식이
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id="chk03"
                                    className="ch_check hide"
                                />
                                <label htmlFor="chk03" className="label">
                                    이상해풀
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id="chk04"
                                    className="ch_check hide"
                                />
                                <label htmlFor="chk04" className="label">
                                    몬스테라라라라라라라라몬스테라라라라라라라라몬스테라라라라라라라라
                                </label>
                            </li>
                        </ul>

                        <textarea placeholder="내용을 입력하세요."></textarea>
                    </div>
                </section>

                <button className="mint_btn">저장</button>
            </main>
        </div>
    );
};
export default DiaryWritePage;
