import mongoose from 'mongoose';

interface IGenre{
    name: string,
    games: mongoose.Schema.Types.ObjectId[]
}

const genreSchema = new mongoose.Schema<IGenre>({
    name: { type: String, required: true },
    games: [{type: mongoose.Schema.Types.ObjectId, ref:'Game'}]
})

export const Genre = mongoose.model<IGenre>('Genre', genreSchema);