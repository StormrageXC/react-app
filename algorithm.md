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
              if (max.length - 1 === s.length - i) {
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
        for (let i = 0; i < dp.length; i++) {
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