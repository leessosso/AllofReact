import React from 'react'
import moment from 'moment-timezone'

export default function MomentExample() {
    const momentDate = moment();
    const newMomentDate = momentDate.add(1, "week");
    const cloneMomentDate = newMomentDate.clone().add(1, "week");

    return (
        <div>
            <h1>Moment</h1>
            <div>Immutable Check</div>
            <div>
                {momentDate.format()}
                <br />
                {newMomentDate.format()}
                <br />
                {cloneMomentDate.format()}
            </div>
            <br />
            <div>Summer Time (NewYork)</div>
            <div>
                2018년 3월 10일 13시에 하루 더하기:
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
            </div>
            <div>
                2018년 3월 10일 13시에 24시간 더하기:
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour ").format()}
            </div>
            <br />
            <div>Leap Year</div>
            <div>
                2017년 1월 1일에서 1년 빼기:
                {moment("2017-01-01").subtract(1, "year").format()}
            </div>
            <div>
                2017년 1월 1일에서 365일 빼기:
                {moment("2017-01-01").subtract(365, "day").format()}
            </div>
            <br />
            <div>내 생일은 무슨 요일이었을까</div>
            <div>{moment("07-17-2021").format("YYYY년 M월 D일")}</div>
            <br />
            <div>한국어로 표기 (07-17-2021을 2021년 7월 17일로 표기)</div>
            <div>{moment("07-17-2021").format("YYYY년 M월 D일")}</div>
        </div>
    )
}
