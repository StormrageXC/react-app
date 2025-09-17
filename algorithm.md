## 3. 无重复字符的最长子串

      var lengthOfLongestSubstring = function (s) {
        let max = (i = start = 0),
          str = "";
        while (i < s.length) {
          const char = s[i],
            index = str.indexOf(char);
          if (index !== -1) {
            str = "";
            i = index + start;
            start++;
            if (s.length - i < max) { // 剩余字符数小于最大长度，无需继续遍历
              break;
            }
          } else {
            str += char;
            max = Math.max(max, str.length);
          }
          i++;
        }
        return max;
      };

## 5. 最长回文子串

      var longestPalindrome = function (s) {
        let i = 0,
          max = "";
        const n = s.length;
        while (i < n) {
          let j = i;
          if (n - i + 1 <= max.length) break;
          while (j < n) {
            const str = s.slice(i, j + 1);
            if (isPalindrome(str)) {
              if (str.length > max.length) {
                max = str;
              }
              if (max.length === s.length - i) {
                return max;
              }
            }
            j++;
          }
          i++;
        }
        return max;
      };

## 6. Z 字形变换

      var convert = function (s, numRows) {
        if (numRows === 1) return s;
        let res = "";
        for (let i = 0; i < numRows; i++) {
          let loop = 0,
            pos = 0;
          while (pos < s.length) {
            if (!i || i + 1 === numRows) {
              pos = i + loop * 2 * (numRows - 1);
              res += s[pos] || "";
            } else {
              pos = loop * 2 * (numRows - 1);
              res += (s[pos - i] || "") + (s[pos + i] || "");
            }
            loop++;
          }
        }
        return res;
      };
## 8. 字符串转换整数 (atoi)

      const INT_MAX = 2 ** 31 - 1;
      const INT_MIN = -(2 ** 31);
      const MAX = Math.floor(INT_MAX / 10);
      var myAtoi = function (s) {
        let length = s.length;
        let index = 0;
        while (index < length && s[index] === " ") {
          index++;
        }
        if (index === length) {
          return 0;
        }
        let sign = 1;
        if (s[index] === "+") {
          index++;
        } else if (s[index] === "-") {
          sign = -1;
          index++;
        }
        let num = 0;
        while (index < length && /[0-9]/.test(s[index])) {
          let digit = Number(s[index]);
          if (num > INT_MAX || num < -INT_MIN) {
            return sign > 0 ? INT_MAX : INT_MIN;
          } else if (num === MAX || num === -MAX) {
            if (sign > 0 && digit > 7) {
              return INT_MAX;
            } else if (sign < 0 && digit > 8) {
              return INT_MIN;
            }
          }
          num = num * 10 + digit * sign;
          index++;
        }
        return num;
      };

## 10. 正则表达式匹配

      const isMatch = (s, p) => {
        if (s == null || p == null) return false;

        const sLen = s.length,
          pLen = p.length;

        const dp = new Array(sLen + 1);
        for (let i = 0; i < dp.length; i++) {3ea
          dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
        }
        // base case
        dp[0][0] = true;
        for (let j = 1; j < pLen + 1; j++) {
          if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
        }
        // 迭代
        for (let i = 1; i < sLen + 1; i++) {
          for (let j = 1; j < pLen + 1; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
              dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == "*") {
              if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
                dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
              } else {
                dp[i][j] = dp[i][j - 2];
              }
            }
          }
        }
        return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
      };


## 15. 三数之和

      var threeSum = function (nums) {
        let ans = [];
        const len = nums.length;
        if (nums == null || len < 3) return ans;
        nums.sort((a, b) => a - b); // 排序
        for (let i = 0; i < len; i++) {
          if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
          if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
          let L = i + 1;
          let R = len - 1;
          while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum == 0) {
              ans.push([nums[i], nums[L], nums[R]]);
              while (L < R && nums[L] == nums[L + 1]) L++; // 去重
              while (L < R && nums[R] == nums[R - 1]) R--; // 去重
              L++;
              R--;
            } else if (sum < 0) L++;
            else if (sum > 0) R--;
          }
        }
        return ans;
      };


## 20. 有效的括号

      var isValid = function (s) {
        const n = s.length;
        if (n % 2 === 1) {
          return false;
        }
        const pairs = new Map([
          [")", "("],
          ["]", "["],
          ["}", "{"],
        ]);
        const stk = [];
        for (let ch of s) {
          if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
              return false;
            }
            stk.pop();
          } else {
            stk.push(ch);
          }
        }
        return !stk.length;
      };

## 22. 括号生成

      var generateParenthesis = function (n) {
        const m = n * 2;
        const ans = [];
        const path = Array(m);
        // i = 目前填了多少个括号
        // open = 左括号个数，i-open = 右括号个数
        function dfs(i, open) {
          if (i === n * 2) {
            ans.push(path.join(""));
            return;
          }
          if (open < n) {
            // 可以填左括号
            path[i] = "(";
            dfs(i + 1, open + 1);
          }
          if (i - open < open) {
            // 可以填右括号
            path[i] = ")";
            dfs(i + 1, open);
          }
        }
        dfs(0, 0);
        return ans;
      };

## 32. 最长有效括号


      const longestValidParentheses = (s) => {
        let maxLen = 0;
        const stack = [];
        stack.push(-1);
        for (let i = 0; i < s.length; i++) {
          const c = s[i];
          if (c == "(") {
            // 左括号的索引，入栈
            stack.push(i);
          } else {
            // 遍历到右括号
            stack.pop(); // 栈顶的左括号被匹配，出栈
            if (stack.length) {
              // 栈未空
              const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
              maxLen = Math.max(maxLen, curMaxLen); // 挑战最大值
            } else {
              // 栈空了
              stack.push(i); // 入栈充当参照
            }
          }
        }
        return maxLen;
      };

## 33. 搜索旋转排序数组


      var search = function (nums, target) {
        let l = 0,
          r = nums.length - 1;
        while (l <= r) {
          let mid = (l + r) >> 1;
          if (nums[mid] === target) return mid;
          if (nums[mid] > target) {
            if (nums[mid] > target && nums[l] <= target) {
              r = mid;
              r--;
            } else {
              l++;
            }
          } else {
            if (nums[mid] < target && nums[r] >= target) {
              l = mid;
              l++;
            } else {
              r--;
            }
          }
        }
        return -1;
      };

## 37. 解决数独


      var solveSudoku = function (board) {
        function isValid(row, col, val, board) {
          let len = board.length;
          // 行不能重复
          for (let i = 0; i < len; i++) {
            if (board[row][i] === val) {
              return false;
            }
          }
          // 列不能重复
          for (let i = 0; i < len; i++) {
            if (board[i][col] === val) {
              return false;
            }
          }
          let startRow = Math.floor(row / 3) * 3;
          let startCol = Math.floor(col / 3) * 3;

          for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
              if (board[i][j] === val) {
                return false;
              }
            }
          }

          return true;
        }

        function backTracking() {
          for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
              if (board[i][j] !== ".") continue;
              for (let val = 1; val <= 9; val++) {
                if (isValid(i, j, `${val}`, board)) {
                  board[i][j] = `${val}`;
                  if (backTracking()) {
                    return true;
                  }

                  board[i][j] = `.`;
                }
              }
              return false;
            }
          }
          return true;
        }
        backTracking(board);
        return board;
      };

## 39. 组合总和
      var combinationSum = function (candidates, target) {
        const ans = [];
        const dfs = (target, combine, idx) => {
          if (idx === candidates.length) {
            return;
          }
          if (target === 0) {
            ans.push(combine);
            return;
          }
          // 直接跳过
          dfs(target, combine, idx + 1);
          // 选择当前数
          if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
          }
        };

        dfs(target, [], 0);
        return ans;
      };

 ## 42. 接雨水

      var trap = function (height) {
        const { length } = height;
        const leftMax = new Array(length).fill(0);
        const rightMax = new Array(length).fill(0);
        leftMax[0] = height[0];
        for (let i = 1; i < leftMax.length; i++) {
          leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }
        rightMax[length - 1] = height[length - 1];
        for (let i = length - 2; i >= 0; i--) {
          rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }
        let water = 0;
        for (let i = 0; i < length; i++) {
          water += Math.min(rightMax[i], leftMax[i]) - height[i];
        }
        return water;
      };

## 44. 通配符匹配

## 45. 跳跃游戏

    var jump = function (nums) {
        const { length: n } = nums;
        let max = 0,
          step = 0,
          pos = 0;
        for (let i = 0; i < n - 1; i++) {
          max = Math.max(max, i + nums[i]);
          if (i === pos) {
            step++;
            pos = max;
          }
        }
        return step;
      };


## 46. 全排列
      var permute = function (nums) {
        const res = [],
          path = [];
        backtracking(nums, nums.length, []);
        return res;

        function backtracking(n, k, used) {
          if (path.length === k) {
            res.push(Array.from(path));
            return;
          }
          for (let i = 0; i < k; i++) {
            if (used[i]) continue;
            path.push(n[i]);
            used[i] = true; // 同支
            backtracking(n, k, used);
            path.pop();
            used[i] = false;
          }
        }
      };

## 48. 旋转图像


      var rotate = function (matrix) {
        const n = matrix.length;
        const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            matrix_new[j][n - i - 1] = matrix[i][j];
          }
        }
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix_new[i][j];
          }
        }
      };    

## 53. 最大子数组和


      var maxSubArray = function (nums) {
        let pre = 0,
          maxAns = nums[0];
        nums.forEach((x) => {
          pre = Math.max(pre + x, x);
          maxAns = Math.max(maxAns, pre);
        });
        return maxAns;
      };


## 78. 子集


      var subsets = function (nums) {
        const ans = [];
        const n = nums.length;
        for (let mask = 0; mask < 1 << n; mask++) {
          const t = [];
          for (let i = 0; i < n; ++i) {
            if (mask & (1 << i)) {
              t.push(nums[i]);
            }
          }
          ans.push(t);
        }
        return ans;
      };

## 72. 编辑距离
      

      const minDistance = (word1, word2) => {
        let dp = Array.from(Array(word1.length + 1), () =>
          Array(word2.length + 1).fill(0)
        );
        for (let i = 1; i <= word1.length; i++) {
          dp[i][0] = i;
        }
        for (let j = 1; j <= word2.length; j++) {
          dp[0][j] = j;
        }
        for (let i = 1; i <= word1.length; i++) {
          for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
            } else {
              dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + 1
              );
            }
          }
        }
        return dp[word1.length][word2.length];
      };

## 84. 柱状图中最大的矩形


      var largestRectangleArea = function (heights) {
        const n = heights.length;
        const list = [],
          leftS = new Array(n).fill(-1),
          rightS = new Array(n).fill(n);
        let i = 0;
        while (i < n) {
          while (list.length && heights[list[list.length - 1]] >= heights[i]) {
            list.pop();
          }
          if (list.length) {
            leftS[i] = list[list.length - 1];
          }
          list.push(i);
          i++;
        }
        list.length = 0;
        i = n - 1;
        while (i >= 0) {
          while (list.length && heights[list[list.length - 1]] >= heights[i]) {
            list.pop();
          }
          if (list.length) {
            rightS[i] = list[list.length - 1];
          }
          list.push(i);
          i--;
        }
        let max = 0;
        for (let i = 0; i < n; i++) {
          max = Math.max(max, heights[i] * (rightS[i] - leftS[i] - 1));
        }
        return max;
      };


## 85. 最大矩形

      var maximalRectangle = function (matrix) {
        const m = matrix.length,
          n = matrix[0].length;
        const left = new Array(m).fill(0).map(() => new Array(n).fill(0));
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
            if (matrix[i][j] === "1") {
              left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
            }
          }
        }
        let max = 0;
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
            if (matrix[i][j] === "0") {
              continue;
            }
            let width = left[i][j];
            let area = width;
            for (let k = i - 1; k >= 0; k--) {
              width = Math.min(width, left[k][j]);
              area = Math.max(width * (i - k + 1), area);
            }
            max = Math.max(max, area);
          }
        }
        return max;
      };

## 91. 解码方法
     
      
      var numDecodings = function (s) {
        const n = s.length;
        const f = new Array(n + 1).fill(0);
        f[0] = 1;
        for (let i = 1; i <= n; ++i) {
          if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
          }
          if (i > 1 && s[i - 2] !== '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            f[i] += f[i - 2];
          }
        }
        return f[n];
      };

## 93. 复原 IP 地址

        var restoreIpAddresses = function (s) {
            const list = [],
                res = []
            const dfs = function (s, index, start) {
                if (index === 4) {
                    if (start === s.length) {
                        res.push(list.join('.'))
                    }
                    return
                }
                if (start === s.length) {
                    return
                }
                if (s[start] === '0') {
                    list[index] = '0';
                    dfs(s, index + 1, start + 1);
                    return;
                }
                let num = 0;
                for (let i = start; i < s.length; i++) {
                    num = num * 10 + Number(s[i]);
                    if (num > 0 && num <= 255) {
                        list[index] = num;
                        dfs(s, index + 1, i + 1)
                    } else {
                        break
                    }
                }
            }
            dfs(s, 0, 0)
            return res;
        };


## 96. 不同的二叉搜索树


      var numTrees = function (n) {
        const dp = new Array(n + 1).fill(0);
        dp[0] = 1;
        dp[1] = 1;
        for (let i = 2; i <= n; i++) {
          for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
          }
        }
        return dp[n];
      };

## 103. 二叉树的锯齿形层序遍历

      var zigzagLevelOrder = function (root) {
        if (!root) {
          return [];
        }

        const ans = [];
        const nodeQueue = [root];

        let isOrderLeft = true;

        while (nodeQueue.length) {
          let levelList = [];
          const size = nodeQueue.length;
          for (let i = 0; i < size; ++i) {
            const node = nodeQueue.shift();
            if (isOrderLeft) {
              levelList.push(node.val);
            } else {
              levelList.unshift(node.val);
            }
            if (node.left !== null) {
              nodeQueue.push(node.left);
            }
            if (node.right !== null) {
              nodeQueue.push(node.right);
            }
          }
          ans.push(levelList);
          isOrderLeft = !isOrderLeft;
        }
        return ans;
      };

## 108. 将有序数组转换为二叉搜索树

      const buildBST = (nums, start, end) => {
        if (start > end) {
          // 构成不了区间，返回null
          return null;
        }

        const midIndex = (start + end) >>> 1; // 求中间索引
        const root = new TreeNode(nums[midIndex]); // 构建当前节点

        root.left = buildBST(nums, start, midIndex - 1); // 构建左子树
        root.right = buildBST(nums, midIndex + 1, end); // 构建右子树

        return root;
      };

      var sortedArrayToBST = function (nums) {
        return buildBST(nums, 0, nums.length - 1); // 递归的入口
      };

## 111. 二叉树的最小深度

      var minDepth = function (root) {
        let n = 1;
        var depth = function (root, n) {
          if (!root) return null;
          if (root.left || root.right) {
            n++;
            const l = depth(root.left, n);
            const r = depth(root.right, n);
            if (l && r) {
              return Math.min(l, r);
            } else {
              return l || r;
            }
          } else {
            return n;
          }
        };
        return depth(root, n);
      };

## 127. 单词接龙


      const ladderLength = (beginWord, endWord, wordList) => {
        const wordSet = new Set(wordList);
        const list = [];
        let min = wordList.length;
        list.push([beginWord, 1]);
        while (list.length) {
          const [word, times] = list.shift();
          if (word === endWord) {
            return times;
          }
          for (let i = 0; i < word.length; i++) {
            for (let j = 97; j <= 122; j++) {
              const newWord =
                word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
              if (wordSet.has(newWord)) {
                wordSet.delete(newWord);
                list.push([newWord, times + 1]);
              }
            }
          }
        }
        return 0;
      };

## 135. 分发糖果


      var candy = function (ratings) {
        const n = ratings.length;
        const left = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
          } else {
            left[i] = 1;
          }
        }

        let right = 0,
          ret = 0;
        for (let i = n - 1; i > -1; i--) {
          if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right++;
          } else {
            right = 1;
          }
          ret += Math.max(left[i], right);
        }
        return ret;
      };

## 139. 单词拆分  

      const wordBreak = (s, wordDict) => {
        const wordSet = new Set(wordDict);
        const len = s.length;
        const visited = new Array(len);
        const queue = [];
        queue.push(0);
        while (queue.length) {
          const start = queue.shift();
          if (visited[start]) continue;
          visited[start] = true;
          for (let i = start + 1; i <= len; i++) {
            const prefix = s.slice(start, i);
              if (i < len) {
                queue.push(i);
              } else {
                return true;
              }
            }
          }
        }
        return false;
      };

## 174. 地下城游戏

      var calculateMinimumHP = function (dungeon) {
        const n = dungeon.length,
          m = dungeon[0].length;
        const matrix = new Array(n + 1)
          .fill(0)
          .map(() => new Array(m + 1).fill(Infinity));
        matrix[n][m - 1] = matrix[n - 1][m] = 1;
        for (let i = n - 1; i >= 0; i--) {
          for (let j = m - 1; j >= 0; j--) {
            const minn = Math.min(matrix[i + 1][j], matrix[i][j + 1]);
            matrix[i][j] = Math.max(minn - dungeon[i][j], 1);
          }
        }
        return matrix[0][0];
      };

## 179. 最大数

      var largestNumber = function (nums) {
        nums.sort((x, y) => {
          let sx = 10,
            sy = 10;
          while (sx <= x) {
            sx *= 10;
          }
          while (sy <= y) {
            sy *= 10;
          }
          return sx * y + x - (sy * x + y);
        });
        if (nums[0] === 0) {
          return "0";
        }
        return nums.join("");
      };

## 204. 计数质数


      var countPrimes = function (n) {
        const isPrime = new Array(n).fill(1);
        let ans = 0;
        for (let i = 2; i < n; ++i) {
          if (isPrime[i]) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
              isPrime[j] = 0;
            }
          }
        }
        return ans;
      };

## 215. 数组中的第K个最大元素

      var findKthLargest = function (nums, k) {
        n = nums.length;
        return quickselect(nums, 0, n - 1, n - k);
      };
      function quickselect(nums, l, r, k) {
        if (l == r) return nums[k];
        let x = nums[l],
          i = l - 1,
          j = r + 1;
        while (i < j) {
          do i++;
          while (nums[i] < x);
          do j--;
          while (nums[j] > x);
          if (i < j) {
            const tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
          }
        }
        if (k <= j) return quickselect(nums, l, j, k);
        else return quickselect(nums, j + 1, r, k);
      }


## 334. 递增的三元子序列


      var increasingTriplet = function (nums) {
        const n = nums.length;
        if (n < 3) {
          return false;
        }
        const leftMin = new Array(n).fill(0);
        leftMin[0] = nums[0];
        for (let i = 1; i < n; i++) {
          leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
        }
        const rightMax = new Array(n).fill(0);
        rightMax[n - 1] = nums[n - 1];
        for (let i = n - 2; i >= 0; i--) {
          rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
        }
        for (let i = 1; i < n - 1; i++) {
          if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
            return true;
          }
        }
        return false;
      };
