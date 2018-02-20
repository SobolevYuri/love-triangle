/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

let arr_len=preferences.length, triangCnt=0, arr=preferences;

for(let j=0;j<arr_len;j++)
{
  if((arr[arr[j]-1]-1 != arr[j]-1) && (arr[arr[arr[j]-1]-1]-1) == j)
  {
triangCnt++;
  }
}

return (triangCnt/3);
};
