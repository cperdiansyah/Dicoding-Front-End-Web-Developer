function getData() {
  return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

function insertData(books) {
  alert(`Data buku [BERHASIL DITAMBAHKAN]`);

  let book = books;
  let bookData = [];

  if (localStorage.getItem(localStorageKey) === null) {
    bookData = [];
  } else {
    bookData = JSON.parse(localStorage.getItem(localStorageKey));
  }
  bookData.push(book);

  localStorage.setItem(localStorageKey, JSON.stringify(bookData));

  renderData(getData());
}

function renderData(books = []) {
  const inCompleted = document.querySelector("#incompleteBookshelfList");
  const completed = document.querySelector("#completeBookshelfList");

  inCompleted.innerHTML = "";
  completed.innerHTML = "";

  books.forEach((book) => {
    if (book.isCompleted == false) {
      let el = `
          <article class="book_item shadow">

          <div class="book-information">
              <h3 style="text-align:justify;">${book.title}</h3>
              <p style="text-align:justify;">Penulis: ${book.author}</p>
              <p>Tahun: ${book.year}</p>
          </div>
              <div class="action action-control-book">
                  <button class="bg-success text-white" onclick="readedBook('${book.id}')">
                      <span>Selesai dibaca</span>
                  </button>
                  <button class="bg-danger text-white" onclick="removeBook('${book.id}')">
                     
                      <span>Hapus buku</span>
                  </button>
              </div>
          </article>
          `;

      inCompleted.innerHTML += el;
    } else {
      let el = `
          <article class="book_item shadow">
            <div class="book-information">

              <h3 style="text-align:justify;">${book.title}</h3>
              <p style="text-align:justify;">Penulis: ${book.author}</p>
              <p>Tahun: ${book.year}</p>
              </div>

              <div class="action action-control-book" >
                  <button class="bg-success text-white" onclick="unreadedBook('${book.id}')"> 
                      
                      <span>Belum selesai dibaca</span>
                  </button>
                  <button class="bg-danger text-white" onclick="removeBook('${book.id}')">
                     
                      <span>Hapus buku</span>
                  </button>
              </div>
          </article>
          `;
      completed.innerHTML += el;
    }
  });
  getBooksInformation();
}

function removeBook(id) {
  let cfm = confirm("Anda yakin akan menghapus data buku ini ?");

  if (cfm == true) {
    const bookDataDetail = getData().filter((a) => a.id == id);
    const bookData = getData().filter((a) => a.id != id);
    localStorage.setItem(localStorageKey, JSON.stringify(bookData));
    renderData(getData());
    alert(`[Buku ${bookDataDetail[0].title}] telah terhapus dari rak`);
  } else {
    return 0;
  }
  getBooksInformation();
}

function readedBook(id) {
  let cfm = confirm("Pindahkan buku ke rak yang [SELESAI DIBACA] ?");

  if (cfm == true) {
    const bookDataDetail = getData().filter((a) => a.id == id);
    const newBook = {
      id: bookDataDetail[0].id,
      title: bookDataDetail[0].title,
      author: bookDataDetail[0].author,
      year: bookDataDetail[0].year,
      isCompleted: true,
    };

    const bookData = getData().filter((a) => a.id != id);
    localStorage.setItem(localStorageKey, JSON.stringify(bookData));

    insertData(newBook);
  } else {
    return 0;
  }
  getBooksInformation();

}

function unreadedBook(id) {
  let cfm = confirm("Pindahkan buku ke rak yang [BELUM SELESAI DIBACA] ?");

  if (cfm == true) {
    const bookDataDetail = getData().filter((a) => a.id == id);
    const newBook = {
      id: bookDataDetail[0].id,
      title: bookDataDetail[0].title,
      author: bookDataDetail[0].author,
      year: bookDataDetail[0].year,
      isCompleted: false,
    };

    const bookData = getData().filter((a) => a.id != id);
    localStorage.setItem(localStorageKey, JSON.stringify(bookData));

    insertData(newBook);
  } else {
    return 0;
  }
  getBooksInformation();

}

function getBooksInformation() {
  let completed = notCompleted = 0;
  const bookshelf = getData();

  const allBooks = bookshelf.length;


  for (let i = 0; i < allBooks; i++) {
    if(bookshelf[i]['isCompleted']){
      completed +=1
    }else{
      notCompleted +=1
    }
  }

  document.querySelector("#totalBookCount").innerHTML = allBooks;
  document.querySelector("#totalCompleteCount").innerHTML = completed;
  document.querySelector("#totalnotCompleteCount").innerHTML = notCompleted;


}
