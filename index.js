import _ from 'lodash';

export default function solution(content){
  // BEGIN
// 1
  const data = content.split('\n').slice(1).map((row) => row.slice(0, -1)).slice(0, -1);
  console.log(`Count: ${data.length}`);
// 2
  const cities = data.map((row) => row.split(',')[7]);
  const uniqCities = _.uniq(cities);
  uniqCities.sort();
  console.log(`Cities: ${uniqCities.join(', ')}`);
// 3
  const humidity = data.map((row) => row.split(',')[3]);
  const maxTemp = _.max(humidity);
  const minTemp = _.min(humidity);
  console.log(`Humidity: Min: ${minTemp}, Max: ${maxTemp}`);
// 4
  const splitData = data.map((row) => (row.split(',')));
  // splitData.sort((a, b) => (b[1] - a[1]));
  // console.log(`HottestDay: ${splitData[0][0]} ${splitData[0][7]}`);
  const hottestRow = _.max(splitData, (row) => row[1]);
  console.log(`HottestDay: ${hottestRow[0]} ${hottestRow[7]}`);
// 5
  const roowsByCity = _.groupBy(splitData, (row) => (row[7]));
  const meanTemp = _.map(roowsByCity, (rows, cityName) => {
    const temp = _.mean(rows.map((row) => (Number(row[1]))));
    return { temp, cityName };
  });
  // Если вернуть функцию выше в виде массива 
  // const hottestCity = _.max(meanTemp, (row) => (row[0]));
  // console.log(`HottestCity: ${hottestCity[1]}`);
  const hottestCity = _.maxBy(meanTemp, (row) => (row.temp)).cityName;
  console.log(`HottestCity: ${hottestCity}`);
  // END
}
