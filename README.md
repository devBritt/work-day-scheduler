# Work Day Scheduler Starter Code

A simple calendar application that allows a user to save events for each hour of the day.

**User Story**
> AS AN employee with a busy schedule
> I WANT to add important events to a daily planner
> SO THAT I can manage my time effectively.

**Acceptance Criteria**
> GIVEN I am using a daily planner to create a schedule:  
> WHEN I open the planner, the current day is displayed at the top of the calendar
> WHEN I scroll down, I am presented with time blocks for standard business hours
> WHEN I view time blocks for that day, each time block is color-coded to indicate whether it is in the past, present, or future
> WHEN I click into a time block, I can enter an event
> WHEN I click the save button for that time block, the text for that event is saved in local storage
> WHEN I refresh the page, the saved events persist

## Demo

![Deployment Link](https://devbritt.github.io/work-day-scheduler/)

![App Screenshot](./assets/Work-Day-Scheduler.png)

## Lessons Learned

The main thing I took away from this assignment was coming up with creative ways to work with dates in JavaScript.
Rather than using Moment.js, I used a plain JavaScript Date object to get the current time.
