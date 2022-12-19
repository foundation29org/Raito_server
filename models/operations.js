// eventsdb schema
'use strict'

const mongoose = require ('mongoose');
const Schema = mongoose.Schema
const Patient = require('./patient')

const { conndbdata } = require('../db_connect')

const OperationsSchema = Schema({
	platform: String,
	route: String,
	data: Object,
	date: {type: Date, default: Date.now},
	createdBy: { type: Schema.Types.ObjectId, ref: "Patient"}
})

module.exports = conndbdata.model('Operations',OperationsSchema)
// we need to export the model so that it is accessible in the rest of the app
