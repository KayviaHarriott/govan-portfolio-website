import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

interface TimelineProps {
  year: string;
  events: { month: string; text: string }[];
}

export const CustomTimeline: React.FC<TimelineProps> = ({ year, events }) => {
  return (
   <div>
    <p>{year}</p>
        <Timeline sx={{width: ""}}>
          {events.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{width: "200px"}}className="flex">{item.month} {item.text}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
   </div>
  
  );
};
