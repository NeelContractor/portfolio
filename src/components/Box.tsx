
export function Box(props: any) {
    return <div className="flex justify-around items-center border border-b-4 border-r-4 border-purple-500 rounded-md bg-black text-white font-mono m-2">
            <img src={props.image} />
            {props.title}
    </div>
}