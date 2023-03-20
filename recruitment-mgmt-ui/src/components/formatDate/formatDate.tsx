// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const formatDate=(time:string)=>{
    const date = new Date(time);
    const formatter = new Intl.DateTimeFormat('en-US', {  year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true});
    const formattedDate = formatter.format(date);
 return formattedDate;
}

export default formatDate;
