// Quicksort

function quickSort(arr, isAscending = true) {
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function partition(left, right, pivot) {
    while (left <= right) {
      if (isAscending) {
        while (arr[left] < pivot) {
          left++;
        }
      } else {
        while (arr[left] > pivot) {
          left++;
        }
      }

      if (isAscending) {
        while (arr[right] > pivot) {
          right--;
        }
      } else {
        while (arr[right] < pivot) {
          right--;
        }
      }

      if (left <= right) {
        swap(left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  function quickSortRecursive(left, right) {
    if (left < right) {
      const pivot = arr[Math.floor((left + right) / 2)];
      const index = partition(left, right, pivot);
      quickSortRecursive(left, index - 1);
      quickSortRecursive(index, right);
    }
  }

  quickSortRecursive(0, arr.length - 1);

  return arr;
}

module.exports = { quickSort };
