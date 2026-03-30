import { File, Folder, Tree } from "@/components/ui/file-tree"
import React from 'react'

const page = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <Tree
                className="bg-background overflow-hidden rounded-md border p-2"
                initialSelectedId="3"
                initialExpandedItems={["1", "2"]}
                elements={ELEMENTS}
            >
                <Folder element="app" value="1">
                    <Folder value="2" element="pages">
                        <File value="3">
                            <p>layout.tsx</p>
                        </File>
                        <File value="4">
                            <p>page.tsx</p>
                        </File>
                    </Folder>
                    <Folder value="2" element="libs">
                        <File value="3">
                            <p>mongodb.js</p>
                        </File>
                        <File value="4">
                            <p>mailer.js</p>
                        </File>
                        <File value="4">
                            <p>winston.js</p>
                        </File>
                    </Folder>
                </Folder>
            </Tree>
        </div>
    )
}

const ELEMENTS = [
    {
        id: "1",
        isSelectable: true,
        name: "app",
        children: [
            {
                id: "2",
                isSelectable: true,
                name: "pages",
                children: [
                    {
                        id: "3",
                        isSelectable: true,
                        name: "layout.tsx",
                    },
                    {
                        id: "4",
                        isSelectable: true,
                        name: "page.tsx",
                    },
                ],
            },
        ],
    },
]

export default page
