import mongoose from 'mongoose';


interface IGame{
    name: string,
    imageUrl: string,
    price: number,
    rating: number,
    description: string,
    region: string,
    platfom: mongoose.Schema.Types.ObjectId,
    genre: mongoose.Schema.Types.ObjectId[],
    seller: mongoose.Schema.Types.ObjectId[],
}

const gameSchema = new mongoose.Schema<IGame>({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: false }, //0-100
    description: { type: String, required: false },
    platfom: { type: mongoose.Schema.Types.ObjectId, ref: 'Platform' ,required:true}, 
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true}],
    region: { type: String, required: true },
    seller: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

})

export const Games = mongoose.model<IGame>('Games', gameSchema);