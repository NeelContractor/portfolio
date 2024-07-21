

export function About() {
    return (
    <div className="grid grid-cols-2 justify-center mt-20">
        <div className="justify-self-center">
            <div className="font-black text-6xl pb-5">
                Neel
            </div>
            <div className="text-2xl font-mono">
                Web3 Solana.
            </div>
            <div className="text-2xl font-mono">
                Full Stack Developer.
            </div>
            <div className="flex text-2xl font-mono">
                thinking about food <div className="pl-5 text-pink-600">❤</div>
            </div>
            <div className="flex justify-between p-10">
                <button className="">
                    <img src="github.png" className="w-10 h-10" />
                </button>
                <button>
                    <img src="mail.png" className="w-10 h-10" />
                </button>
                <button>
                    <img src="coffee.png" className="w-10 h-10" />
                </button>
            </div>
        </div>
        <div className="w-40 h-40 justify-self-center">
            <img src="shin.jpeg"  />
        </div>
    </div>
    )
}

