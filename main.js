$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

$.getJSON('https://api.github.com/users/taylorpreston').done(function(data) {
  // console.log(data);

  var name = ('<h1>'+ data.name +'</h1>')
  var username = ('<h2>'+ data.login +'</h2>')
  var profileImg = ('<img src='+data.avatar_url+'/>')
  var dateJoined = ('<div>'+data.created_at+'</div>')
  var location = ('<div>'+data.location+'</div>')
  var followers = data.followers
  var starred = "0"
  var following = data.following

  var nameSec = $('.name')
  var locDate = $('.location-dateJoined')

  nameSec.append(profileImg)
  nameSec.append(name)
  nameSec.append(username)
  locDate.append(location)
  locDate.append(dateJoined)

});

$.getJSON('https://api.github.com/users/taylorpreston/repos').done(function(repos) {
    repos.forEach(function(repo){
      console.log(repo)
      var repoUrl = repo.url
      var name = ('<a href='+repoUrl+'>'+' <span class="octicon octicon-repo"></span>  '+repo.name+'<a>')
      var RepoDisplay = $('.posted-repos')
      var PopularPosts = $('.popular-repos')
      var allRepos = $('.allRepos')
      var pubRepos = $('.pubRepos')
      var privRepos = $('.privateRepos')
      var forkRepos = $('.forkRepos')
      var mirrorRepos = $('.mirrorRepos')

      PopularPosts.append(name)

      var repoClick = function(){
        RepoDisplay.html = "";
        repo.display = true;
        RepoDisplay.append(name)
      }

      allRepos.click(repoClick)

      if (repo.privte = true){
        privRepos.click(repoClick)
      }

    })

    var repoSection = $('.repo')
    var allRepos = $('.all-repos')
    var postedRepos = $('.posted-repos')
    var publicAct = $('.public-activity')
    var contribTab = $('.cont')
    var repositTab = $('.reposit')
    var publicTab = $('.pubAct')

    var tabActivate = function(){
      this.active = true
    }

    var tabClick = function(repo_display){
        if(this.active = true){
        repo_display.display = true
      } else {
        repo.diplay = none;
      };
    }

    contribTab.click(tabActivate, tabClick(allRepos))
    repositTab.click(tabActivate, tabClick(postedRepos))
    publicTab.click(tabActivate, tabClick(postedRepos))

  });


// $('.').append('<>'++'<>')
