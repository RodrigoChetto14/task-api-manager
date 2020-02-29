const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: true
})

taskSchema.pre('save', async function(next) {
    if(this.isModified("description")){
        this.description = this.description.charAt(0).toUpperCase() + this.description.slice(1)
    }
    console.log(this)
    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task