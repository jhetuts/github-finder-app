class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
			this.profile.innerHTML = `
				<div class="card card-body mb-3">
					<div class="row">
						<div class="col-md-3">
							<img class="img-fluid mb-2" src="${user.avatar_url}">
							<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
						</div>
						<div class="col-md-9">
							<span class="badge badge-primary">Public Reps: ${user.public_repos}</span>
							<span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
							<span class="badge badge-primary">Followers: ${user.followers}</span>
							<span class="badge badge-primary">Following: ${user.following}</span>
							<hr>
							<ul class="list-group">
								<li class="list-group-item">Company: ${user.company}</li>
								<li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</li>
								<li class="list-group-item">Location: ${user.location}</li>
								<li class="list-group-item">Member since: ${user.created_at}</li>
							</ul>
						</div>
					</div>
				</div>
			`;
		}

		showAlert(message, type){

			this.clearAlert();

			const div = document.createElement('div');
			div.className = type;
			div.appendChild(document.createTextNode(message));

			const container = document.querySelector('.searchContainer');
			const search = document.querySelector('.search');

			container.insertBefore(div, search);

			setTimeout(() => {
				this.clearAlert();
			}, 3000);
		}

		clearAlert(){
			const currentAlert = document.querySelector('.alert');
			if(currentAlert){
				currentAlert.remove();
			}
		}

		clearProfile(){
			this.profile.innerHTML = "";
			this.clearRepo();
		}

		showRepos(repos){
			
			this.clearRepo();

			let output = "";
			output = `<h2>Latest Repo </h2>`;
			
			repos.forEach((repo) => {
				output += `
					<div class="card card-body mb-2">
						<div class="row">
							<div class="col-md-6">
								<a hre="${repo.html_url}" target="_blank">${repo.name}</a>
							</div>
							<div class="col-md-6">
								<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
								<span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
								<span class="badge badge-primary">Forks: ${repo.forks_count}</span>
							</div>
						</div>
					</div>
				`;
			});

			document.getElementById('repos').innerHTML = output;
		}

		clearRepo(){
			document.getElementById('repos').innerHTML = '';
		}
}
