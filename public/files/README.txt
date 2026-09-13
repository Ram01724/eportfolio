Put your activity and project files in this folder.

They become public at  https://your-site.vercel.app/files/<filename>  with no
login, which is what the submission instructions require.

Naming: no spaces. Use underscores.
  good -> PT-P2_Report.pdf
  bad  -> PT-P2 Report.pdf

Notebooks: a raw .ipynb downloads instead of displaying. To show it in the page:
    jupyter nbconvert --to html YourNotebook.ipynb
then put YourNotebook.html here and add  html: "/files/YourNotebook.html"

Keep each file under about 25 MB.
