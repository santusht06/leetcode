var binarySearch = (arr, mid, find) => {
  //  we first sort the array
  //  to sort directly we use inbuild function

  arr = arr.sort((a, b) => a - b);

  mid = arr.length / 2;

  console.log(arr[mid]);

  if (find == arr[mid]) {
    return true;
  } else {
    if (find > arr[mid]) {
      binarySearch(arr, mid + 1, find);
    } else {
      binarySearch(arr, mid - 1, find);
    }
  }
};

arr = [1, 4, 5, 7, 3, 2];
mid = 0;
find = 5;

console.log(binarySearch(arr, mid, find));
