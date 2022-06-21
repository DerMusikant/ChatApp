
export type Message = {
    _id: string,
    user: {
        _id: string,
        name: string
    },
    chat: string,
    message: string,
    date: Date
}

export type Post = {
    user: string,
    chat: string,
    message: string,
}


export type PostPromise = {
    error: string,
    body: {
        user: string,
        chat: string,
        message: string,
        pic: string,
        fileDestination: string,
        date: Date
    }
}