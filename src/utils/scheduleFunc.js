const schedule = require('node-schedule');
const cronParser = require('cron-parser');

let cronArr = [
    {
        value: 'cron 1 minute',
        cron: '* * * * *',
    },
    {
        value: 'cron 2 minutes',
        cron: '*/2 * * * *',
    },
    {
        value: 'cron 3 minutes',
        cron: '*/3 * * * *',
    },
];

const invokeSchedule = () => {
    const jobDate = new Date('2023-02-20T09:33:00');

    schedule.scheduleJob(jobDate, function () {
        console.log('-----9h33----');
    });
    for (let i of cronArr) {
        const job = schedule.scheduleJob('job', i.cron, function () {
            console.log('---------', i.value, '-------------', new Date());
        });
    }
};

module.exports = invokeSchedule();
