const express = require('express');
const app = express();
const search = require('./search');
//登录

app.get('/personalInfo/gateway',function (req,res) {
    let personaleData={
        pwd:'123456',
        nickName:'小小酥',
        sex:"女",
        age:"19",
        birth:'2000.01.01',
        idName:'学生',
        phoneNum:"13123235656",
        Email:"123@123.com",
        localCity:'成都',
        descripMyself:'吾日三省吾身',
        schoolName:'家里蹲大学',
        level:'小学生',
        perfessional:'吃喝睡完',
        enterSchoolTime:'2000-10-10',
        endGrade:'2010-11-11'
    }
    // console.log(req.query)
    let user=req.query.user;
    let pwd1=req.query.pwdSend;
    console.log(user,pwd1)
    let returnData;
    if((user == personaleData.phoneNum || user==personaleData.Email) && pwd1==personaleData.pwd ){
        returnData=personaleData
        // console.log(returnData)
    }else {
        returnData= {
            code:1
        }
        console.log(returnData)
    }
    res.send(returnData)
})
//公司和职位搜索
app.get('/companyAndPosition/gateway',function (req,res) {
    let companyAndPosition=[]
    search.map(function (item) {
        if(item.companyName.includes(req.query.condition)||item.positionName.includes(req.query.condition)){
            companyAndPosition.push(item)
        }
    })
    res.send({
        companyAndPosition
    })
})


// 职位详情
app.get('/jobDetails/gateway',function (req,res) {
    // console.log(req.query)
    let resultData;
    search.map(function (item) {
        if(item.positionId == req.query.condition){
            resultData=item
        }
    })
    res.send({resultData})
})

//职位列表请求
app.get('/jobList/gateway',function (req,res) {
   // console.log(res.query)

})

//登录之后jobList
app.get('/jobList/getaway',function(req,res){
    let num = req.query.pageNo;
    let size = req.query.pageSize;
    let start=(num-1)*size;
    let length1=start+(size)*num;
    let retrunData=search.slice(start,length1);
    // console.log(retrunData)
    res.send(retrunData)
})


// 职位搜索

// console.log(search)
app.get('/jobListSearch/gateway',function (req,res) {
    // console.log(req.query)
    let jobName = req.query.search;
    let jobs=[];
    search.map(function (item) {
        if(item.positionName.includes(jobName)){
            jobs.push(item)
        }
        else {
            // console.log("no")
        }
    })
    res.send(jobs)
})
app.listen(8010,function () {
    console.log("serve is up on the port 8010")
})