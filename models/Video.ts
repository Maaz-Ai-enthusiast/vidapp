import mongoose, {Schema,model,models} from "mongoose";

export const VIDEO_DIMENSIONS = {
    width: 1080,
    height: 1920,
} as const; 

export interface IVideo {
   _id? :  mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    transformation?: {
        height: number;
        width: number;
        quality?: number;
    }


}

const videoScheme   = new Schema<IVideo>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
        trim: true,
    },
    controls: {
        type: Boolean,
        default: true,
    },
    transformation: {
        height: {
            type: Number,
            default: VIDEO_DIMENSIONS.height
        },
        width: {
            type: Number,
            default: VIDEO_DIMENSIONS.width
        },
        quality: {
            type: Number,
            min : 1,
            max: 100,
        }
    }
}, {
    timestamps: true
})
const Video = models?.Video || model<IVideo>("Video", videoScheme);
export default Video;