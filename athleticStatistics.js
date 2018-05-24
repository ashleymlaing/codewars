// Statistics for an Athletic Association
// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:
//
// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
//
// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.
//
// To compare the results of the teams you are asked for giving three statistics; range, average and median.
//
// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
//
// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.
//
// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).
//
// Your task is to return a string giving these 3 values. For the example given above, the string result will be
//
// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
//
// of the form:
//
// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
//
// where hh, mm, ss are integers (represented by strings) with each 2 digits.
//
// Remarks:
//
// if a result in seconds is ab.xy... it will be given truncated as ab.
//
// if the given string is "" you will return ""


function stat(strg) {
    // your code
    let statsArray = strg.split(",");
	let allTime = [];
	let range = [];
	let average = [];
	let median;
    //console.log(statsArray);
    for(let i = 0; i < statsArray.length; i++){
		let time = statsArray[i].split("|");
		allTime.push(time);
	}
	//console.log(allTime);
	for(let x = 0; x < allTime.length; x++){
		for(let y = 0; y < allTime[x].length; y++){
			let item = allTime[x][y];
			item = Number(item);
			allTime[x][y] = item;
		}
	}
	allTime.sort();

  let length = allTime.length;

  //median

  let half = Math.floor(length/2);
  median = allTime[half]


  console.log(allTime)
  console.log("The median: "+median);

	//console.log(allTime);
	let first = allTime[0];
  let last = allTime[length-1];

    let hr = first[0];
    let min = first[1];
    let sec = first[2];

    let hr2 = last[0];
    let min2 = last[1];
    let sec2 = last[2];

    if(sec2 < sec){
      min2--;
      sec2+=60;
      let difference = sec2 - sec;
      range.push(difference);
    } else {
      difference = sec2 - sec;
      range.push(difference);
    }

    if(min2 < min){
      hr2--;
      min2+=60;
      let difference = min2 - min;
      range.push(difference);
    } else {
      difference = min2 - min;
      range.push(difference);
    }

    difference = hr2 - hr;
    range.push(difference);


	range.reverse();
	console.log("The range: "+range);

  //average

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  for(let a = 0; a < allTime.length; a++){


    hours += allTime[a][0];
    minutes += allTime[a][1];
    seconds += allTime[a][2];


  }

  let hoursAvg = hours/length;
  let minutesAvg = minutes/length;
  let secondsAvg = seconds/length;

  average = [hoursAvg, minutesAvg, secondsAvg];

  console.log("This is average: " + average);

}


// Test
// Test.describe("Basic tests",function() {
// Test.assertEquals(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"),
//     "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
// Test.assertEquals(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"),
//     "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
// })
// Test Results:
//  Basic tests
//  Log
// [ [ 1, 15, 59 ],
//   [ 1, 17, 20 ],
//   [ '01', 32, 34 ],
//   [ 1, 47, 16 ],
//   [ 2, 17, 17 ] ]
// Range is 01|01|18
// Median is 01|32|34
// Average is 01|38|05
// Test Passed: Value == 'Range: 01|01|18 Average: 01|38|05 Median: 01|32|34'
//  Log
// [ [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ '02', 22, '00' ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ] ]
// Range is 00|31|17
// Median is 02|22|00
// Average is 02|26|18
// Test Passed: Value == 'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00'
//  Log
// [ 2, 17, 20 ] [ 2, 32, 34 ]
// [ '02', 24, 27 ]
// [ [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ] ]
// Range is 00|31|17
// Median is 02|24|27
// Average is 02|27|10
// Expected: 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57', instead got: 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|27'
//  Log
// [ 0, 16, 16 ] [ 0, 17, 20 ]
// [ '00', 16, 18 ]
// [ [ 0, 15, 0 ],
//   [ 0, 15, 59 ],
//   [ 0, 16, 16 ],
//   [ 0, 17, 20 ],
//   [ 0, 19, 34 ],
//   [ 0, 22, 34 ] ]
// Range is 00|07|34
// Median is 00|16|18
// Average is 00|17|47
// Expected: 'Range: 00|07|34 Average: 00|17|47 Median: 00|16|48', instead got: 'Range: 00|07|34 Average: 00|17|47 Median: 00|16|18'
//  Log
// [ 11, 25, 11 ] [ 12, 17, 20 ]
// [ 11, 21, 15 ]
// [ [ 10, 16, 16 ],
//   [ 10, 26, 37 ],
//   [ 11, 15, 17 ],
//   [ 11, 15, 59 ],
//   [ 11, 22, 0 ],
//   [ 11, 25, 11 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 48 ],
//   [ 12, 20, 14 ],
//   [ 13, 19, 34 ],
//   [ 9, 16, 30 ],
//   [ 9, 22, 34 ] ]
// Range is 0-1|06|18
// Median is 11|21|15
// Average is 11|14|36
// Expected: 'Range: 04|03|04 Average: 11|14|36 Median: 11|18|59', instead got: 'Range: 0-1|06|18 Average: 11|14|36 Median: 11|21|15'
//  Log
// [ 1, 17, 48 ] [ 1, 19, 34 ]
// [ '01', 18, 41 ]
// [ [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 16, 16 ],
//   [ 1, 16, 30 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 48 ],
//   [ 1, 19, 34 ],
//   [ 1, 20, 14 ],
//   [ 1, 22, 0 ],
//   [ 1, 22, 34 ],
//   [ 1, 25, 11 ],
//   [ 1, 26, 37 ] ]
// Range is 00|11|20
// Median is 01|18|41
// Average is 01|19|36
// Test Passed: Value == 'Range: 00|11|20 Average: 01|19|36 Median: 01|18|41'
// Completed in 12ms
//  Random tests
//  Test number : 0
//  Log
// [ [ 1, 22, 0 ],
//   [ 1, 26, 37 ],
//   [ 1, 32, 34 ],
//   [ 1, 47, 16 ],
//   [ 11, 25, 11 ],
//   [ 2, 17, 17 ],
//   [ '02', 17, 20 ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ],
//   [ 9, 16, 30 ],
//   [ 9, 16, 30 ] ]
// Range is 07|54|30
// Median is 02|17|20
// Average is 03|56|55
// It should work with random inputs - Expected: 'Range: 10|03|11 Average: 03|56|55 Median: 02|31|41', instead got: 'Range: 07|54|30 Average: 03|56|55 Median: 02|17|20'
// Completed in 3ms
//  Test number : 1
//  Test number : 2
//  Log
// [ [ 0, 17, 20 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 15, 59 ],
//   [ 1, 16, 30 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 48 ],
//   [ 10, 16, 16 ],
//   [ 11, 15, 59 ],
//   [ 11, 15, 59 ],
//   [ 11, 15, 59 ],
//   [ 11, 22, 0 ],
//   [ 12, 17, 48 ],
//   [ 2, 17, 20 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ] ]
// Range is 02|29|56
// Median is 11|15|59
// Average is 04|41|02
// It should work with random inputs - Expected: 'Range: 12|00|28 Average: 04|41|02 Median: 02|32|34', instead got: 'Range: 02|29|56 Average: 04|41|02 Median: 11|15|59'
// Completed in 2ms
//  Test number : 3
//  Log
// [ [ 0, 15, 17 ],
//   [ 0, 17, 20 ],
//   [ 0, 17, 20 ],
//   [ 0, 19, 34 ],
//   [ 1, 15, 17 ],
//   [ 1, 17, 20 ],
//   [ 1, 19, 34 ],
//   [ 1, 26, 37 ],
//   [ 10, 16, 16 ],
//   [ 12, 17, 48 ],
//   [ 2, 15, 59 ],
//   [ 2, 15, 59 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 31, 41 ],
//   [ 2, 31, 41 ] ]
// Range is 02|16|24
// Median is 10|16|16
// Average is 02|40|29
// It should work with random inputs - Expected: 'Range: 12|02|31 Average: 02|40|29 Median: 02|15|59', instead got: 'Range: 02|16|24 Average: 02|40|29 Median: 10|16|16'
// Completed in 1ms
//  Test number : 4
//  Test number : 5
//  Log
// [ [ 0, 19, 34 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 17, 48 ],
//   [ 1, 17, 48 ],
//   [ 1, 47, 16 ],
//   [ 11, 25, 11 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 48 ],
//   [ 12, 17, 48 ],
//   [ 13, 19, 34 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 32, 34 ] ]
// Range is 02|13|00
// Median is 12|17|48
// Average is 04|52|18
// It should work with random inputs - Expected: 'Range: 13|00|00 Average: 04|52|18 Median: 02|17|17', instead got: 'Range: 02|13|00 Average: 04|52|18 Median: 12|17|48'
// Completed in 1ms
//  Test number : 6
//  Log
// [ [ 0, 16, 16 ],
//   [ 1, 20, 14 ],
//   [ 1, 26, 37 ],
//   [ 1, 26, 37 ],
//   [ 11, 15, 17 ],
//   [ 2, 17, 17 ],
//   [ '02', 17, 20 ],
//   [ 2, 22, 0 ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 9, 16, 30 ],
//   [ 9, 22, 34 ] ]
// Range is 09|06|18
// Median is 02|17|20
// Average is 03|45|57
// It should work with random inputs - Expected: 'Range: 10|59|01 Average: 03|45|57 Median: 02|22|00', instead got: 'Range: 09|06|18 Average: 03|45|57 Median: 02|17|20'
// Completed in 1ms
//  Test number : 7
//  Log
// [ 11, 25, 11 ] [ 12, 17, 20 ]
// [ 11, 21, 15 ]
// [ [ 0, 15, 17 ],
//   [ 0, 16, 16 ],
//   [ 0, 19, 34 ],
//   [ 0, 22, 34 ],
//   [ 1, 17, 20 ],
//   [ 1, 20, 14 ],
//   [ 1, 22, 0 ],
//   [ 11, 25, 11 ],
//   [ 11, 25, 11 ],
//   [ 12, 17, 20 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 2, 32, 34 ],
//   [ 9, 16, 30 ],
//   [ 9, 22, 34 ],
//   [ 9, 22, 34 ] ]
// Range is 09|07|17
// Median is 11|21|15
// Average is 04|26|50
// It should work with random inputs - Expected: 'Range: 12|02|03 Average: 04|26|50 Median: 02|17|18', instead got: 'Range: 09|07|17 Average: 04|26|50 Median: 11|21|15'
// Completed in 1ms
//  Test number : 8
//  Log
// [ [ 0, 17, 20 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 17 ],
//   [ '01', 22, 34 ],
//   [ 1, 32, 34 ],
//   [ 12, 17, 48 ],
//   [ 2, 22, 0 ] ]
// Range is 02|04|40
// Median is 01|22|34
// Average is 02|47|09
// It should work with random inputs - Expected: 'Range: 12|00|28 Average: 02|47|09 Median: 01|22|34', instead got: 'Range: 02|04|40 Average: 02|47|09 Median: 01|22|34'
//  Test number : 9
//  Log
// [ 1, 22, 34 ] [ 12, 17, 48 ]
// [ '06', 19, 41 ]
// [ [ 1, 15, 59 ],
//   [ 1, 15, 59 ],
//   [ 1, 17, 48 ],
//   [ 1, 22, 34 ],
//   [ 12, 17, 48 ],
//   [ 12, 17, 48 ],
//   [ 2, 17, 17 ],
//   [ 2, 47, 16 ] ]
// Range is 01|31|17
// Median is 06|19|41
// Average is 04|21|33
// It should work with random inputs - Expected: 'Range: 11|01|49 Average: 04|21|33 Median: 01|49|55', instead got: 'Range: 01|31|17 Average: 04|21|33 Median: 06|19|41'
// Completed in 1ms
//  Test number : 10
//  Log
// [ [ 0, 16, 16 ], [ 11, 25, 11 ], [ 2, 47, 16 ] ]
// Range is 02|31|00
// Median is 11|25|11
// Average is 04|49|34
// It should work with random inputs - Expected: 'Range: 11|08|55 Average: 04|49|34 Median: 02|47|16', instead got: 'Range: 02|31|00 Average: 04|49|34 Median: 11|25|11'
//  Test number : 11
//  Log
// [ [ 1, 15, 59 ],
//   [ 1, 15, 59 ],
//   [ 1, 32, 34 ],
//   [ 11, 15, 59 ],
//   [ 11, 22, 0 ],
//   [ 12, 20, 14 ],
//   [ 12, 20, 14 ],
//   [ 12, 20, 14 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 32, 34 ] ]
// Range is 01|16|35
// Median is 12|20|14
// Average is 05|47|58
// It should work with random inputs - Expected: 'Range: 11|04|15 Average: 05|47|58 Median: 02|17|17', instead got: 'Range: 01|16|35 Average: 05|47|58 Median: 12|20|14'
// Completed in 1ms
//  Test number : 12
//  Log
// [ 10, 16, 16 ] [ 10, 16, 16 ]
// [ 10, 16, 16 ]
// [ [ 0, 17, 20 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 48 ],
//   [ 1, 22, 0 ],
//   [ 1, 32, 34 ],
//   [ 10, 16, 16 ],
//   [ 10, 16, 16 ],
//   [ 12, 17, 48 ],
//   [ 2, 15, 59 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ] ]
// Range is 02|15|14
// Median is 10|16|16
// Average is 03|07|20
// It should work with random inputs - Expected: 'Range: 12|00|28 Average: 03|07|20 Median: 02|15|59', instead got: 'Range: 02|15|14 Average: 03|07|20 Median: 10|16|16'
// Completed in 7ms
//  Test number : 13
//  Log
// [ 10, 26, 37 ] [ 2, 17, 17 ]
// [ '06', 21, 27 ]
// [ [ 0, 15, 17 ],
//   [ 0, 15, 59 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 59 ],
//   [ 1, 15, 59 ],
//   [ 1, 17, 20 ],
//   [ 10, 26, 37 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ] ]
// Range is 02|31|59
// Median is 06|21|27
// Average is 02|19|00
// It should work with random inputs - Expected: 'Range: 10|11|20 Average: 02|19|00 Median: 02|17|17', instead got: 'Range: 02|31|59 Average: 02|19|00 Median: 06|21|27'
//  Test number : 14
//  Log
// [ [ '00' ] ]
// Range is 00|NaN|NaN
// Median is 00
// Average is NaN|NaN|NaN
// It should work with random inputs - Expected: '', instead got: 'Range: 00|NaN|NaN Average: NaN|NaN|NaN Median: 00'
// Completed in 1ms
//  Test number : 15
//  Log
// [ [ 0, 15, 59 ],
//   [ 0, 16, 16 ],
//   [ 1, 15, 59 ],
//   [ 1, 17, 20 ],
//   [ '01', 17, 48 ],
//   [ 10, 26, 37 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ] ]
// Range is 02|01|18
// Median is 01|17|48
// Average is 02|24|38
// It should work with random inputs - Expected: 'Range: 10|10|38 Average: 02|24|38 Median: 01|17|48', instead got: 'Range: 02|01|18 Average: 02|24|38 Median: 01|17|48'
// Completed in 1ms
//  Test number : 16
//  Log
// [ [ 0, 15, 17 ],
//   [ 0, 15, 59 ],
//   [ 0, 17, 20 ],
//   [ 1, 16, 30 ],
//   [ 1, 26, 37 ],
//   [ 1, 32, 34 ],
//   [ 10, 26, 37 ],
//   [ 10, 26, 37 ],
//   [ 11, 15, 17 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 48 ],
//   [ 13, 19, 34 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 22, 0 ] ]
// Range is 02|06|43
// Median is 11|15|17
// Average is 05|41|01
// It should work with random inputs - Expected: 'Range: 13|04|17 Average: 05|41|01 Median: 02|17|17', instead got: 'Range: 02|06|43 Average: 05|41|01 Median: 11|15|17'
//  Test number : 17
//  Log
// [ [ '00' ] ]
// Range is 00|NaN|NaN
// Median is 00
// Average is NaN|NaN|NaN
// It should work with random inputs - Expected: '', instead got: 'Range: 00|NaN|NaN Average: NaN|NaN|NaN Median: 00'
//  Test number : 18
//  Log
// [ 1, 32, 34 ] [ 10, 16, 16 ]
// [ '05', 24, 25 ]
// [ [ 0, 15, 59 ],
//   [ 1, 15, 59 ],
//   [ 1, 16, 16 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 48 ],
//   [ 1, 20, 14 ],
//   [ 1, 32, 34 ],
//   [ 1, 32, 34 ],
//   [ 10, 16, 16 ],
//   [ 10, 26, 37 ],
//   [ 10, 26, 37 ],
//   [ 11, 15, 59 ],
//   [ 12, 20, 14 ],
//   [ 2, 17, 17 ],
//   [ 2, 22, 0 ],
//   [ 2, 47, 16 ] ]
// Range is 02|31|17
// Median is 05|24|25
// Average is 04|30|03
// It should work with random inputs - Expected: 'Range: 12|04|15 Average: 04|30|03 Median: 01|54|55', instead got: 'Range: 02|31|17 Average: 04|30|03 Median: 05|24|25'
// Completed in 1ms
//  Test number : 19
//  Log
// [ [ 0, 15, 59 ],
//   [ 0, 19, 34 ],
//   [ 1, 22, 0 ],
//   [ 1, 26, 37 ],
//   [ 10, 16, 16 ],
//   [ 10, 26, 37 ],
//   [ 11, 15, 17 ],
//   [ 11, 25, 11 ],
//   [ 12, 17, 48 ],
//   [ '02', 15, 59 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 9, 16, 30 ] ]
// Range is 09|00|31
// Median is 02|15|59
// Average is 04|44|43
// It should work with random inputs - Expected: 'Range: 12|01|49 Average: 04|44|43 Median: 02|31|41', instead got: 'Range: 09|00|31 Average: 04|44|43 Median: 02|15|59'
// Completed in 1ms
//  Test number : 20
//  Log
// [ 12, 17, 48 ] [ 2, 15, 59 ]
// [ '07', 16, 53 ]
// [ [ 0, 15, 59 ],
//   [ 0, 16, 16 ],
//   [ 0, 22, 34 ],
//   [ 1, 19, 34 ],
//   [ 1, 32, 34 ],
//   [ 1, 32, 34 ],
//   [ 1, 32, 34 ],
//   [ 11, 15, 59 ],
//   [ 12, 17, 48 ],
//   [ 12, 17, 48 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 2, 22, 0 ],
//   [ 2, 22, 0 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 9, 16, 30 ],
//   [ 9, 16, 30 ] ]
// Range is 09|00|31
// Median is 07|16|53
// Average is 04|01|27
// It should work with random inputs - Expected: 'Range: 12|01|49 Average: 04|01|27 Median: 02|19|40', instead got: 'Range: 09|00|31 Average: 04|01|27 Median: 07|16|53'
// Completed in 1ms
//  Test number : 21
//  Log
// [ [ '00' ] ]
// Range is 00|NaN|NaN
// Median is 00
// Average is NaN|NaN|NaN
// It should work with random inputs - Expected: '', instead got: 'Range: 00|NaN|NaN Average: NaN|NaN|NaN Median: 00'
//  Test number : 22
//  Log
// [ [ 0, 15, 59 ],
//   [ 1, 15, 17 ],
//   [ 10, 16, 16 ],
//   [ 11, 22, '00' ],
//   [ 12, 17, 48 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ] ]
// Range is 02|01|21
// Median is 11|22|00
// Average is 05|43|08
// It should work with random inputs - Expected: 'Range: 12|01|49 Average: 05|43|08 Median: 02|17|20', instead got: 'Range: 02|01|21 Average: 05|43|08 Median: 11|22|00'
//  Test number : 23
//  Log
// [ 10, 16, 16 ] [ 10, 26, 37 ]
// [ 10, 21, 26 ]
// [ [ 0, 17, 20 ],
//   [ 0, 19, 34 ],
//   [ 1, 15, 17 ],
//   [ 1, 16, 30 ],
//   [ 1, 17, 20 ],
//   [ 1, 20, 14 ],
//   [ 1, 22, 34 ],
//   [ 1, 22, 34 ],
//   [ 1, 32, 34 ],
//   [ 10, 16, 16 ],
//   [ 10, 26, 37 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 48 ],
//   [ 12, 17, 48 ],
//   [ 12, 20, 14 ],
//   [ 2, 17, 20 ],
//   [ 2, 22, 0 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ] ]
// Range is 02|29|56
// Median is 10|21|26
// Average is 04|39|03
// It should work with random inputs - Expected: 'Range: 12|02|54 Average: 04|39|03 Median: 02|19|40', instead got: 'Range: 02|29|56 Average: 04|39|03 Median: 10|21|26'
// Completed in 2ms
//  Test number : 24
//  Log
// [ 2, 15, 59 ] [ 2, 17, 17 ]
// [ '02', 16, 38 ]
// [ [ 1, 17, 20 ],
//   [ 1, 17, 20 ],
//   [ 1, 25, 11 ],
//   [ 1, 25, 11 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 48 ],
//   [ 13, 19, 34 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 22, 0 ],
//   [ 2, 22, 0 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ],
//   [ 9, 16, 30 ] ]
// Range is 07|59|10
// Median is 02|16|38
// Average is 04|31|07
// It should work with random inputs - Expected: 'Range: 12|02|14 Average: 04|31|07 Median: 02|22|00', instead got: 'Range: 07|59|10 Average: 04|31|07 Median: 02|16|38'
// Completed in 1ms
//  Test number : 25
//  Log
// [ 10, 26, 37 ] [ 11, 15, 59 ]
// [ 10, 20, 48 ]
// [ [ 0, 19, 34 ],
//   [ 1, 15, 59 ],
//   [ 1, 22, 0 ],
//   [ 10, 16, 16 ],
//   [ 10, 26, 37 ],
//   [ 11, 15, 59 ],
//   [ 12, 17, 20 ],
//   [ 12, 20, 14 ],
//   [ 2, 17, 17 ],
//   [ 2, 31, 41 ] ]
// Range is 02|12|07
// Median is 10|20|48
// Average is 06|26|17
// It should work with random inputs - Expected: 'Range: 12|00|40 Average: 06|26|17 Median: 06|23|58', instead got: 'Range: 02|12|07 Average: 06|26|17 Median: 10|20|48'
// Completed in 1ms
//  Test number : 26
//  Log
// [ [ 0, 16, 16 ],
//   [ 0, 19, 34 ],
//   [ 0, 19, 34 ],
//   [ 1, 17, 48 ],
//   [ 1, 25, 11 ],
//   [ 1, 32, 34 ],
//   [ 1, 47, 16 ],
//   [ 10, 16, 16 ],
//   [ 11, 22, '00' ],
//   [ 11, 22, 0 ],
//   [ 12, 17, 48 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 9, 22, 34 ] ]
// Range is 09|06|18
// Median is 11|22|00
// Average is 04|19|40
// It should work with random inputs - Expected: 'Range: 12|01|32 Average: 04|19|40 Median: 02|17|17', instead got: 'Range: 09|06|18 Average: 04|19|40 Median: 11|22|00'
//  Test number : 27
//  Test number : 28
//  Log
// [ [ 0, 19, 34 ],
//   [ 1, 16, 16 ],
//   [ 1, 22, 0 ],
//   [ 1, 26, 37 ],
//   [ 11, 22, 0 ],
//   [ 12, 17, 20 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 9, 16, 30 ],
//   [ 9, 22, 34 ] ]
// Range is 09|03|00
// Median is 12|17|20
// Average is 04|52|08
// It should work with random inputs - Expected: 'Range: 11|57|46 Average: 04|52|08 Median: 02|17|20', instead got: 'Range: 09|03|00 Average: 04|52|08 Median: 12|17|20'
//  Test number : 29
//  Test number : 30
//  Log
// [ 11, 22, 0 ] [ 12, 20, 14 ]
// [ 11, 21, '07' ]
// [ [ 0, 22, 34 ],
//   [ 1, 25, 11 ],
//   [ 1, 47, 16 ],
//   [ 10, 16, 16 ],
//   [ 10, 26, 37 ],
//   [ 11, 22, 0 ],
//   [ 12, 20, 14 ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 9, 16, 30 ],
//   [ 9, 16, 30 ] ]
// Range is 08|53|56
// Median is 11|21|07
// Average is 06|10|49
// It should work with random inputs - Expected: 'Range: 11|57|40 Average: 06|10|49 Median: 05|54|32', instead got: 'Range: 08|53|56 Average: 06|10|49 Median: 11|21|07'
// Completed in 1ms
//  Test number : 31
//  Test number : 32
//  Log
// [ 12, 17, 20 ] [ 2, 17, 17 ]
// [ '07', 17, 18 ]
// [ [ 0, 22, 34 ],
//   [ 1, 20, 14 ],
//   [ 1, 22, 34 ],
//   [ 1, 25, 11 ],
//   [ 12, 17, 20 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 22, 0 ],
//   [ 2, 47, 16 ] ]
// Range is 02|24|42
// Median is 07|17|18
// Average is 02|52|54
// It should work with random inputs - Expected: 'Range: 11|54|46 Average: 02|52|54 Median: 02|17|17', instead got: 'Range: 02|24|42 Average: 02|52|54 Median: 07|17|18'
//  Test number : 33
//  Log
// [ 1, 17, 20 ] [ 10, 26, 37 ]
// [ '05', 21, 28 ]
// [ [ 0, 15, 17 ],
//   [ 0, 15, 17 ],
//   [ 0, 15, 59 ],
//   [ 0, 15, 59 ],
//   [ 0, 17, 20 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 16, 30 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 20 ],
//   [ 10, 26, 37 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 2, 22, 0 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ],
//   [ 9, 22, 34 ],
//   [ 9, 22, 34 ] ]
// Range is 09|07|17
// Median is 05|21|28
// Average is 02|41|59
// It should work with random inputs - Expected: 'Range: 10|11|20 Average: 02|41|59 Median: 01|47|18', instead got: 'Range: 09|07|17 Average: 02|41|59 Median: 05|21|28'
// Completed in 1ms
//  Test number : 34
//  Log
// [ 11, 22, 0 ] [ 12, 20, 14 ]
// [ 11, 21, '07' ]
// [ [ 0, 15, 59 ],
//   [ 0, 17, 20 ],
//   [ 0, 19, 34 ],
//   [ 1, 17, 48 ],
//   [ 11, 15, 17 ],
//   [ 11, 15, 59 ],
//   [ 11, 22, 0 ],
//   [ 12, 20, 14 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 9, 16, 30 ] ]
// Range is 09|00|31
// Median is 11|21|07
// Average is 05|00|27
// It should work with random inputs - Expected: 'Range: 12|04|15 Average: 05|00|27 Median: 02|32|34', instead got: 'Range: 09|00|31 Average: 05|00|27 Median: 11|21|07'
//  Test number : 35
//  Log
// [ 1, 32, 34 ] [ 1, 47, 16 ]
// [ '01', 39, 25 ]
// [ [ 0, 15, 17 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 16, 30 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 20 ],
//   [ 1, 22, 0 ],
//   [ 1, 26, 37 ],
//   [ 1, 32, 34 ],
//   [ 1, 47, 16 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 48 ],
//   [ 13, 19, 34 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 47, 16 ],
//   [ 9, 22, 34 ] ]
// Range is 09|07|17
// Median is 01|39|25
// Average is 04|07|03
// It should work with random inputs - Expected: 'Range: 13|04|17 Average: 04|07|03 Median: 01|39|55', instead got: 'Range: 09|07|17 Average: 04|07|03 Median: 01|39|25'
// Completed in 2ms
//  Test number : 36
//  Log
// [ 1, 32, 34 ] [ 2, 17, 17 ]
// [ '01', 24, 25 ]
// [ [ 0, 17, 20 ],
//   [ 1, 16, 30 ],
//   [ 1, 17, 20 ],
//   [ 1, 19, 34 ],
//   [ 1, 22, 34 ],
//   [ 1, 32, 34 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 9, 22, 34 ],
//   [ 9, 22, 34 ] ]
// Range is 09|05|14
// Median is 01|24|25
// Average is 02|58|47
// It should work with random inputs - Expected: 'Range: 09|05|14 Average: 02|58|47 Median: 01|54|55', instead got: 'Range: 09|05|14 Average: 02|58|47 Median: 01|24|25'
// Completed in 1ms
//  Test number : 37
//  Log
// [ [ 0, 15, 59 ],
//   [ 0, 19, 34 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 59 ],
//   [ 1, 15, 59 ],
//   [ 1, 16, 16 ],
//   [ 1, 22, 0 ],
//   [ 1, 22, 0 ],
//   [ 1, 26, 37 ],
//   [ 11, 15, 17 ],
//   [ 12, 17, 20 ],
//   [ 12, 17, 20 ],
//   [ 13, 19, 34 ],
//   [ 2, 15, 59 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 20 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 9, 22, 34 ] ]
// Range is 09|06|35
// Median is 11|15|17
// Average is 04|11|29
// It should work with random inputs - Expected: 'Range: 13|03|35 Average: 04|11|29 Median: 02|15|59', instead got: 'Range: 09|06|35 Average: 04|11|29 Median: 11|15|17'
//  Test number : 38
//  Test number : 39
//  Log
// [ 1, 15, 17 ] [ 2, 17, 17 ]
// [ '01', 16, 17 ]
// [ [ 1, 15, 17 ], [ 2, 17, 17 ] ]
// Range is 01|02|00
// Median is 01|16|17
// Average is 01|46|17
// It should work with random inputs - Expected: 'Range: 01|02|00 Average: 01|46|17 Median: 01|46|17', instead got: 'Range: 01|02|00 Average: 01|46|17 Median: 01|16|17'
//  Test number : 40
//  Log
// [ [ 0, 22, 34 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 59 ],
//   [ 1, 20, 14 ],
//   [ 1, 26, 37 ],
//   [ 1, 26, 37 ],
//   [ 11, 25, 11 ],
//   [ 12, 17, 48 ],
//   [ 13, 19, 34 ],
//   [ 2, 15, 59 ],
//   [ 2, 22, 0 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ],
//   [ 2, 47, 16 ],
//   [ 9, 16, 30 ] ]
// Range is 08|53|56
// Median is 12|17|48
// Average is 04|21|14
// It should work with random inputs - Expected: 'Range: 12|57|00 Average: 04|21|14 Median: 02|22|00', instead got: 'Range: 08|53|56 Average: 04|21|14 Median: 12|17|48'
// Completed in 1ms
//  Test number : 41
//  Log
// [ [ 0, 15, 17 ],
//   [ 0, 15, 17 ],
//   [ 0, 16, 16 ],
//   [ 0, 16, 16 ],
//   [ 1, 19, 34 ],
//   [ 1, 25, 11 ],
//   [ '01', 47, 16 ],
//   [ 10, 16, 16 ],
//   [ 11, 15, 17 ],
//   [ 2, 15, 59 ],
//   [ 2, 22, 0 ],
//   [ 2, 32, 34 ],
//   [ 9, 22, 34 ] ]
// Range is 09|07|17
// Median is 01|47|16
// Average is 03|21|31
// It should work with random inputs - Expected: 'Range: 11|00|00 Average: 03|21|31 Median: 01|47|16', instead got: 'Range: 09|07|17 Average: 03|21|31 Median: 01|47|16'
//  Test number : 42
//  Log
// [ [ 1, 15, 59 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 20 ],
//   [ 1, 17, 20 ],
//   [ 1, 19, 34 ],
//   [ 1, 26, 37 ],
//   [ 11, 15, 59 ],
//   [ 11, 22, 0 ],
//   [ 12, 17, 20 ],
//   [ 13, 19, 34 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 2, 17, 20 ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ] ]
// Range is 01|16|35
// Median is 12|17|20
// Average is 04|18|15
// It should work with random inputs - Expected: 'Range: 12|03|35 Average: 04|18|15 Median: 02|17|20', instead got: 'Range: 01|16|35 Average: 04|18|15 Median: 12|17|20'
// Completed in 1ms
//  Test number : 43
//  Log
// [ 1, 32, 34 ] [ 1, 32, 34 ]
// [ '01', 32, 34 ]
// [ [ 0, 16, 16 ],
//   [ 0, 17, 20 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 17 ],
//   [ 1, 32, 34 ],
//   [ 1, 32, 34 ],
//   [ 1, 32, 34 ],
//   [ 11, 15, 17 ],
//   [ 2, 15, 59 ],
//   [ 9, 16, 30 ] ]
// Range is 09|00|14
// Median is 01|32|34
// Average is 02|57|41
// It should work with random inputs - Expected: 'Range: 10|59|01 Average: 02|57|41 Median: 01|32|34', instead got: 'Range: 09|00|14 Average: 02|57|41 Median: 01|32|34'
//  Test number : 44
//  Log
// [ 1, 26, 37 ] [ 1, 26, 37 ]
// [ '01', 26, 37 ]
// [ [ 0, 16, 16 ],
//   [ 0, 16, 16 ],
//   [ 0, 17, 20 ],
//   [ 1, 16, 30 ],
//   [ 1, 20, 14 ],
//   [ 1, 26, 37 ],
//   [ 1, 26, 37 ],
//   [ 13, 19, 34 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 32, 34 ],
//   [ 2, 47, 16 ] ]
// Range is 02|31|00
// Median is 01|26|37
// Average is 02|27|49
// It should work with random inputs - Expected: 'Range: 13|03|18 Average: 02|27|49 Median: 01|26|37', instead got: 'Range: 02|31|00 Average: 02|27|49 Median: 01|26|37'
// Completed in 1ms
//  Test number : 45
//  Log
// [ [ '00' ] ]
// Range is 00|NaN|NaN
// Median is 00
// Average is NaN|NaN|NaN
// It should work with random inputs - Expected: '', instead got: 'Range: 00|NaN|NaN Average: NaN|NaN|NaN Median: 00'
// Completed in 1ms
//  Test number : 46
//  Log
// [ [ 0, 16, 16 ],
//   [ 0, 19, 34 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 19, 34 ],
//   [ 1, 19, 34 ],
//   [ 1, 19, 34 ],
//   [ 1, 22, 0 ],
//   [ 1, 26, 37 ],
//   [ 11, 15, 17 ],
//   [ 11, 15, 59 ],
//   [ 11, 22, 0 ],
//   [ 11, 22, 0 ],
//   [ 2, 15, 59 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 9, 16, 30 ],
//   [ 9, 16, 30 ] ]
// Range is 09|00|14
// Median is 11|15|17
// Average is 04|21|36
// It should work with random inputs - Expected: 'Range: 11|05|44 Average: 04|21|36 Median: 02|15|59', instead got: 'Range: 09|00|14 Average: 04|21|36 Median: 11|15|17'
// Completed in 1ms
//  Test number : 47
//  Log
// [ 12, 17, 48 ] [ 9, 22, 34 ]
// [ 10, 19, 41 ]
// [ [ 12, 17, 48 ], [ 9, 22, 34 ] ]
// Range is 0-3|04|46
// Median is 10|19|41
// Average is 10|50|11
// It should work with random inputs - Expected: 'Range: 02|55|14 Average: 10|50|11 Median: 10|50|11', instead got: 'Range: 0-3|04|46 Average: 10|50|11 Median: 10|19|41'
// Completed in 1ms
//  Test number : 48
//  Log
// [ 11, 22, 0 ] [ 12, 20, 14 ]
// [ 11, 21, '07' ]
// [ [ 0, 15, 17 ],
//   [ 1, 15, 17 ],
//   [ 1, 15, 59 ],
//   [ 1, 16, 16 ],
//   [ 1, 17, 20 ],
//   [ 1, 19, 34 ],
//   [ 1, 20, 14 ],
//   [ 1, 20, 14 ],
//   [ 11, 22, 0 ],
//   [ 12, 20, 14 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 17 ],
//   [ 2, 17, 20 ],
//   [ 2, 22, 0 ],
//   [ 2, 31, 41 ],
//   [ 2, 31, 41 ],
//   [ 2, 32, 34 ],
//   [ 2, 32, 34 ] ]
// Range is 02|17|17
// Median is 11|21|07
// Average is 02|54|42
// It should work with random inputs - Expected: 'Range: 12|04|57 Average: 02|54|42 Median: 02|17|17', instead got: 'Range: 02|17|17 Average: 02|54|42 Median: 11|21|07'
//  Test number : 49
//  Log
// [ [ 0, 15, 59 ],
//   [ 0, 22, 34 ],
//   [ 1, 15, 59 ],
//   [ 11, 15, 59 ],
//   [ 2, 15, 59 ],
//   [ 2, 22, 0 ],
//   [ 2, 31, 41 ] ]
// Range is 02|15|42
// Median is 11|15|59
// Average is 02|54|18
// It should work with random inputs - Expected: 'Range: 11|00|00 Average: 02|54|18 Median: 02|15|59', instead got: 'Range: 02|15|42 Average: 02|54|18 Median: 11|15|59'
