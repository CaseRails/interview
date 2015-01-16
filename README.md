# interview

When you interview with CaseRails, we'll provide you with the following environment variables that you'll need to use to complete the tasks:
* TEST_LOGIN_URL
* TEST_LOGIN_PASSWORD
* TEST_LOGIN_EMAIL

Interview Task A: Run existing Protractor Tests

1. In a shell (the "Main" shell), clone this repository:
  1. `git clone git@github.com:CaseRails/interview.git`
2. Install the requirements.  Instructions here are for Mac OS X.  For other OS's you're on your own.  It should be very similar for Linux.  No idea how this works on Windows.
  1. Install the selenium server: `cat brew_requirements.txt | xargs brew install`
  2. Install the node requirements: `cat node_requirements.txt | xargs npm install -g`
  3. Install the Python requirements:
    1. `pip install virtualenvwrapper`
    2. `mkvirtualenv interview`
    3. `pip install -r requirements.txt`
3. Open a separate shell and run the selenium server:
  1. `selenium-server`
4. In the Main shell, export the environment variables so protractor knows where to login to and what credentials to use:
  1. `export TEST_LOGIN_URL=<the url we gave you>`
  2. `export TEST_LOGIN_PASSWORD=<the password we gave you>`
  3. `export TEST_LOGIN_EMAIL=<the username we gave you>`
5. In the Main shell, run the protractor tests:
  1. `protractor protractor.conf.js`
6. Take a screenshot of your Main shell showing that the protractor tests ran successfully.

Interview Task B:

1. Create a new spec file `interview.js` in the `protractor/` directory.  Refer to dev_intro.js for how this should look.
2. Edit protractor.conf.js so that your new spec runs after the dev_intro spec.
3. To complete this task you'll need to modify the files `protractor.conf.js`, `protractor/interview.js`, and `protractor/contacts_list.page.js`.
4. The interview spec should do the following:
  1. Start on the "Create Wizard" page, like the dev_intro spec.
  1. Find the "Contacts" button by its ID on the page.
  2. Click it.
  3. Verify that the header at the top of th page says "Contacts"
  4. Find the "Manage" button by its ID on the page.
  5. Click it.
  6. Verify that the header at the top of the page says "Manage"
