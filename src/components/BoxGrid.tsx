import { Box } from "./Box";


export function BoxGrid() {
    return <div className="flex justify-center">
        <div>
            <div className="grid grid-cols-6 mr-10 ml-10 ">
                <div className="grid-span-2"></div>
                <Box title="Javascript" image="javascript.png" />
                <Box title="Typescript" image="typescript.png" />
            </div>
            <div className="grid grid-cols-6 mr-10 ml-10">
                <div className="grid-span-2"></div>
                <Box title="AWS" image="aws.png" />
                <Box title="Docker" image="docker.png" />
            </div>
            <div className="grid grid-cols-6 mr-10 ml-10">
                <div className="grid-span-2"></div>
                <Box title="React" image="react.png" />
                <Box title="Nextjs" image="nextjs.png" />
                <Box title="Express" image="express.png" />
            </div>
            <div className="grid grid-cols-6 mr-10 ml-10">
                <div className="grid-span-2"></div>
                <Box title="Mongo" image="mongo.png" />
                <Box title="Postgre" image="postgre.png" />
            </div>
            <div className="grid grid-cols-6 mr-10 ml-10">
                <div className="grid-span-2"></div>
                <Box title="Bash" image="bash.png" />
                <Box title="Git" image="git.png" />
            </div>
        </div>
    </div>
}