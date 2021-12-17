/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function() {
  this.article = []

  this.followMap = new Map()
};

/** 
* @param {number} userId 
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.article.push([userId, tweetId])
  this.followMap.set(userId, (this.followMap.get(userId) || new Set()).add(userId))
};

/** 
* @param {number} userId
* @return {number[]}
*/
Twitter.prototype.getNewsFeed = function(userId) {
  // console.log(this.article)
  let res = []
  let users = this.followMap.get(userId)
  // console.log(users)
  // console.log(this.article)
  for (let i = this.article.length - 1, j = 0; i >= 0 && j < 10; i--) {
      let x = this.article[i]
      // console.log(users.has(x[0]), x[1])
      if (users.has(x[0])) {
          j++
          res.push(x[1])
      }
  }
  return res
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function(followerId, followeeId) {
  if (this.followMap.get(followerId)) {
      this.followMap.get(followerId).add(followeeId)
  } else {
      this.followMap.set(followerId, new Set([followerId, followeeId]))
  }
  
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.followMap.get(followerId).delete(followeeId)
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

