'use strict';

function construct(){
    this.find = (req,res,next) => {
        res.json({
            api:'/api/v1/user/',
            name:'user'
        });
    }

    this.findAll = (req,res,next) => {
        res.json({
            api:'/api/v1/user/all',
            name:'user'
        });
    }

    this.create = (req,res,next) => {
        res.json({
            api:'/api/v1/user/create',
            name:'user'
        });
    }

    this.update = (req,res,next) => {
        res.json({
            api:'/api/v1/user/update',
            name:'user'
        });
    }

    this.delete = (req,res,next) => {
        res.json({
            api:'/api/v1/user/delete',
            name:'user'
        });
    }
}

module.exports = new construct();