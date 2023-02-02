import Image from "next/image";
import { Inter } from "@next/font/google";
import {App} from './index';

export default function Home() {
    return (
        <main className="font-serif">
            <header className="flex items-center h-12 fixed top-0 w-full justify-between md:h-16 bg-sky-200">
                <h1 id="logo" className="block ml-[4%]">
                    <a
                        className="text-3xl px-2 bg-sky-300 rounded-2xl py-2 h-full"
                        href=""
                    >
                        HOSHINO
                    </a>
                </h1>

                <nav className="h-full flex">
                    <ul className="flex h-full">
                        <li className="navList">
                            <a className="navA" href="#profile">
                                プロフィール
                            </a>
                        </li>
                        <li className="navList">
                            <a className="navA" href="#origin">
                                出身
                            </a>
                        </li>
                        <li className="navList">
                            <a className="navA" href="#love_artist">
                                アーティスト
                            </a>
                        </li>
                        <li className="navList">
                            <a className="navA" href="#love_anime">
                                おすすめアニメ
                            </a>
                        </li>
                        <li className="navList">
                            <a className="navA" href="#future">
                                今後
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <section id="profile" className="mt-28 mb-20 bg-sky-50 rounded-xl p-12">
                    <h2 id="title_profile" className="text-4xl text-center">
                        プロフィール
                    </h2>
                    <div className="flex justify-around">
                        <div className="">
                            <h2 className="text-3xl ml-20 m-5">星野　圭助</h2>

                            <img
                                src="/profile.JPG"
                                width={300}
                                height={400}
                                alt=""
                            />
                        </div>
                        <div>
                            <ul className="text-2xl mt-24 tracking-wide leading-loose">
                                <li>アニメ、ゲームが好きです。</li>
                                <li>
                                    ゲームだとDBDとLOLとアークナイツをよくやります。
                                </li>
                                <li>Switchで何かやりたいけど探し中。。</li>
                                <li>
                                    自分で考えて成し遂げられた時をやりがいってことにしてます。
                                </li>
                                <li>好きな食べ物はラーメンと魚系</li>
                                <li>嫌いな食べ物はセロリ、パセリです。</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="origin"className="bg-pink-50 rounded-xl p-12">
                    <h2 className="text-4xl">出身地</h2>
                    <div aria-label="の基本的なHTML">
                        <div className="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">
                                    <Image
                                        src="/gunma.jpg"
                                        width={300}
                                        height={100}
                                        alt=""
                                    />
                                </li>
                                <li className="splide__slide">
                                    <Image
                                        src="/oze.jpg"
                                        width={300}
                                        height={100}
                                        alt=""
                                    />
                                </li>
                                <li className="splide__slide">
                                    <Image src="/kusatsu.jpg"
                                        width={300}
                                        height={100}
                                        alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="love_artist">
                    <h2 className="text-4xl">好きなアーティスト</h2>
                </section>

                <section id="love_anime">
                    <h2 className="text-4xl">好きなアニメ</h2>
                </section>

                <section id="future">
                    <h2 className="text-4xl">今後</h2>
                    <p></p>
                </section>
            </div>
        </main>
    );
}
