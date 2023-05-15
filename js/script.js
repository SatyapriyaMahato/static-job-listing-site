// Fetch the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Access the JSON data and display it in the HTML container
    const container = document.getElementById('jobsList');

    // Iterate over the data and create HTML elements
    data.forEach(item => {
        const job = document.createElement('div');
        job.className = 'job div-shadow';

        let newBtn, featuredBtn;
        if(item.new) newBtn = "NEW!";
        if(item.fetured) featuredBtn = "FEATURED";
        job.innerHTML = `

        <div class="job-info">
          <div class="company-logo">
            <img src=${item.logo} alt="company logo">
          </div>
          <div class="post-info">
            <div class="company-name">
              <p class="name">${item.company}</p>
              <button class="new">${newBtn}</button>
              <button class="featured">${featuredBtn}</button>
            </div>
            <div class="job-title">
              <h1>${item.position}</h1>
            </div>
            <div class="job-criteria">
              <ul>
                <li class="days"><span>${item.postedAt}</span></li>
                <li><span class="time">${item.contract}</span></li>
                <li><span class="location">${item.location}</span></li>
              </ul>
            </div>
          </div>
        </div>
        `;
       

        const tags = document.createElement('div');
        tags.className = 'job-tags';

        item.languages.forEach(element => {
            const btn = document.createElement('button');
            btn.className = 'tag';
            btn.textContent = element;
            tags.appendChild(btn);
        });

        item.tools.forEach(element => {
            const btn = document.createElement('button');
            btn.className = 'tag';
            btn.textContent = element;
            tags.appendChild(btn);
        });
        const role = document.createElement('button');
        const level = document.createElement('button');
            role.className = 'tag';
            level.className = 'tag';
            role.textContent = item.role;
            level.textContent = item.level;
            tags.appendChild(role);
            tags.appendChild(level);

        job.appendChild(tags);

        container.appendChild(job);
      });
    })
    .catch(error => console.log(error));

