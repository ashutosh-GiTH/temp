"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "President",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAygMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIEAwUGB//EADsQAAEEAQMBBQUGBAUFAAAAAAEAAgMRBAUSITEGE0FRYSIycYGhFCNCkbHBM1Jy0QcVJDRiU5Kis/D/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADIRAQACAgEDAgQEBQQDAAAAAAABAgMRBBIhMQVBEyJRYQYycZEzocHR4RRCgfAjUrH/2gAMAwEAAhEDEQA/AN+Avm71aVKA6QFKAwEEqRApA6QMBRKJMhAqUpSAUICBUgdICkDpAUgVICkCpA6QFICkDpQFSCuFdYwEDAUISpAAIJgIGoQKUAQNAlIVoGhqQgagMBEHSApElSApNgpAUgAEDpECkBSCqrrmAoQlSCVIGAgkAoQKUAQCAKChq2pY+lYUmXmOqJn/AJHwA9Vscfj3z3ilI7qXvWlZtZ5tq3+IGo5MhGBtxYvCuXHyXp+P6NhpG7/NLmZObe0/L2amHtXrMcrH/b5i5p6OdwfktyfTuNMa6IYY5WWJ3t2OgdvmTFkGrR7HGh37enzHguNzPRJru2Cf+G7h5sW+W7vGODgCDwRYI6ELz0xpvphVEqRBIBEkgEAgEDQCAQVQFdZIIhKkDQMKEJhQBQBAFSIlTA8b7d9opdY1F2HEB9mx5HNYB+MjiyvaemcGvHx9c/mn+Tj8rPOS3THiGoxND1LLALYtjT4vNLftmpDDXj5LNg7spqHd7mvicf5ef1VP9TVk/wBJfShk6Vn4bS6XHc1g6lp3BZK5aW8MdsOSveYegf4d9pPtcQ0zNk++jH3Bd+Jo8L8wvNescDon42OO0+f1+rocPP1R0W8u8C8+3k1CoUBFSkkAgESEAgaICIVQrrpBBJA02gwqiQUBoBAig1XaXJfh6DqORF/Ejx3ub8aW5wqRfkUrP1Ys1unHa0fR5DoOG0vbI8bnnoT4Bezy3nxDmYae8u6wmBzAKHHotRvR4dJp8ETYQZGAnpVLPWIYrTPswahhxTj2WbT4eyptWPZNZnxLgs3AOi6zBqUApsczXObXA59pRfWXFbHPvDBenRki8PWh19F4WY06qShU6UBIFSlJIBA0AgahAQVaWRdIBBIIiQqiQCCQCgNEBAiEGi7aHb2X1L/nCWf9xA/ddD02N8rH+rFn/hWh5lpzZ5MgwYbYmmMe0+U0AfJes+Xp3b3aFerequgxtTz9Mnji1fHjETjTZmOBBHxCrOOnmrJXJferN7q2vTY+EyTFjY3f+Mj9FNbRHlOSJmOzWYOfLnRyST9oO7lby2Pb7N+RWXqjXhhis711I5z5MvTJBlsb3pB3bTYPqPQrBvVtwz23NJiXdaU/vtNxJCbLoWH6BeO5VenNaPvLcrO4hbpa6TUBFAkSSAUgQSpQgUgKQVqWRdIJKDpVAEDCCQUBhEBQAqRz3bqeCHs9PHM5wdO5rIwG3brBA9Oi6fpdLWzxMe22HPMdLh9J7NSamH5Dpdsd8Rm2h3zHK9PGTpjTUrh6u8trqemRY2mjFOOwP4B2ve8/E2U+NNlowRDewYHf6DDFJH3kIaW8t/fzWDqtE7bPTWY01+D2WxY8hwhjw5nE8h8Dd4/NZ/i38Q1/gY4ncwnrGlf5aO4ZGWRuFCzdWqWnXeVoiNah0nZ7vW4Zxpow37NUbHA++2hyfLxXmvU8UUzdUTvfdsU7V02i5i4QIoIoEiTRACCSBogIK1KzIYRB0gKQFIJBQGiDUBIOX/xFIb2eBLbrJj5A6crr+kfx5/SWvyPyOe0PVhi6Z3riA4Gm/Fd+azNuytbRFGqzM/VZcyWXDlD+994ltj4crNWlZjuw2vffyt/pU2t/Z4mvzI8YDqYpWX9bAUxjqtN767r+snHdhwy4eS77fEbDnyg7j5EjjlW1HhHVMd1PK1SfPxonTNNuaDz4LXtWd92XqjpjTq+zMjptNbM9pBkrn+amjlef9XmPjRX6Qy453G22K5K5UgCgSJRUBhAwgalAAQOkFcdVK50gYCgCAQSARApQgUgCpS1faTEdnaDnY7G7pHQuMYP8w5H6Lb4OX4Wet58bY8sbrLzPQZoJseTFyWb43kOZfHtDw9OpC9jMTFmhW0TXUp6Xh6VBrokzxJk4p6QzPNfmsvX20r8P5txL1TByuyjMcRM0rCDQ0fhaW18eqtF6E4svmLOa1HR9GmzpNTxsGPGPuxxRuOwn+auixzffaGSMeu9p25zVs7224mKQ/LlcIo2g9L45WOK+b28R3MmWI+SPL07Dx2YmNFjRCmRMDW/JeKz5JyXm8+7erXpjSxSwpKkAUCpAqUAQMKQ+iB0gEFYdVK6SgMIGAiBSBjhEGoDpBFwUiI4Kms90vHO32IzTe1eR9jBjjmY2UtB4a53X6j6r2vpeWc3Gjr8xuHH5ETjv8vhj0jJxsg7c0hrzXI6Eray45juthyRPaXY6fi9nsYxvlmia+twcS1UrEyz26a92n7Vdq4Hf6fSjvDvZ73ngeiz0xa8tXLn34VOwGCZu0EGZkkuG8lpPi6jytP1SZji2ipxY3ki0vXwF4mZdeAqhqAEIFSkJAUgYCAQCgFFBgpSudUiDCBgIhIC0DpAIgICrQ2palmwadiyZGQ4AMaSG3y4+AC2OLxsnJyRTHH+FMmWuOu5eL9qsqXL1ibKyBXfkOaLuhXDfkvc4ePHHxVpHs49svxbTMtZG0VbTbqWxWdwxTBSGRzgNxIHA/JI0TMy2OjaZJlzMtp2N5dfUqLW0tTHNpd1pm3Ay8RwoBkrG7R6kCvqsVZi14iY2z3jpxzp6FKwxurwPIXjfVeDPD5M0j8s94/T/AA3eLm+Nii3v7la5rZCApNgITYVIklILQCBqAIhgUsiQUIFKQwEQkEQlSGwBu6C/gsuHBlz26cdZmfspfJWkbtOjkjc1l0F3uN+HM1++a3T/ADlz8vqeOvakbUszvu6dtLmkC/Z4Xe43oXDxd5r1T9+/8vDnZfUc1/E6hxWo6ftlL3ucS+/fddf/AFrp2x1iO0MFMkz5anWNKgysAOmd3Y6NIaSQa8FSaxNdL1tqXOy6Nl4MjWzAFr7LJGjhy07xNG5j1fw2Wn6a8uG6EH1pYupsRT7Olw8FuMwkgC/ClWbbZK0iFzRYf8x7Q48bSO4xCJpXdOejB8z+i2eNX5t/Rp8u+qdMe70V7GOaA4XXgfBZuVwsHKrrNXevDRw58mGd0lg7prnFrNzSDQDm8Lgcn8M11vBfX2n+8d3Qx+qd9ZI/ZB0b2dRY8xyF5zlencniz/5a9vr7fv8A3dLFyMeWPllClpMxoFSBUpSVInYpAIgIMCldJqCdIgIHSvSlr2itY3Mq2mKxuWdke11O6+S9Zwfw/Wnzcnv9v7uPyPUd9sa3Gyx0A+C9HTHTHHTWNQ5dr2t3mdlJED4LLCkqk8O+7AKupLmNegbHFizOaSwzhrtvWnGv3Ci++nstj/Nphzez5liY+Bz2905xbyCRZv4FUrTsta/zfZg7SifI0t8ucInObLGIyxu0305HPhu8Vr56RSmm1xrzbI1UDGQxtI5vpwtCa93TiyWVlObjbtlEp0rTbsvYGm5kXZlk0ZqTOzIJJXNPSPeNrR5+a6GGmqOTnybyPSQ1rw837wryWdqsTi5rQ6yHM4cL6hWRtZFUCBYI5VJrExqV4nU7hB+FG8bm+yfRcHmehcbNuafJP28fs6GHn5Kdrd1KbGki5cLb5heV5npvJ4k/PXcfWPDqYuTjy+J7sVLns5FEolSkKQkAgwgIukFKEggaIa7Ush5nixoSQ95BsfQL0/4e4kWtPItHjtH9Zcz1DNqvw4bMTFuGyVxsgU4+oXsHDlffIIYi89OCFGkbZZ+K9VMIlicy3ub5BShptRwItQ0eWKVu5pa4cfFW+yPfY7PkjR8ff7wi2k/BVWbVmHgZDQ/JjhyIpowSNoI6+PkeFim0XrpmputtwgOxunSUGCVg9JLH1WvOKrbjkZIU9T7I6RDEIqmmlIva6SmgetVwrUwVmVMnKvEG/BLNFdHhwsMkLB9mjB2MDgbA9BYC2tRHaGlNpmeqW4hduaC5pa48uBN8+KjWkiccOcPEfmpEoPcaokhZYbCqkwL48FW0RMalaJmPDXZ2PtqWNtM8R5Lxvrvp0YLfHxRqs+ftP+XZ4XI646LeVMrzjoIKUhSkkAgxBSslSBjhEBCXMZU7nTS5rbqOUOB9AaX0b07j/A4tKfT+veXnOVk68suj1DaRKxrqjyoe8Z5bqXSjw0UvtXfdnoJ79p7WH6hQltsrjb/SkIlJtPO4dCOqlCjp47zAlHk97fqp90eyto0YGlyMdYMUjwa8OT/cJPlMeG30iNr898brcDEevyVMnaF8fezbaezbC9jj7hIBPksEy2GiynPlllebJcaH5LYpGoa957pYzdsbeOvPB6qZ8qx4WGilEphNzdzSoSjiCoWg/BJIThdcJJ81CYZL9jjqgewPiMbujhRWvyMUZsdsc+7LjvNLRaPZpXAtNHwXzK1JpPTbzD0lZ33QIVVkUSSJCCACssdIg0FXU5jj4E8o94MO34rb9Pw/G5NKfff/ABDDnv045lp+zTGZ0WTFwXi90ZPgfEei+kY57TEvNZd7iV+F0g0h2OecrTyS0Hq6MeCyV7dmK3fur4mQ06DpkTHbmvy2sBHiA+/0Ceyf9zq8sm78NqmFJQwZC5rmuPIb4JJDFpDqdnRHqyYur4gFJ8p9ksJndz5cdCnjePLy/ZTZFW00oAZ90P4ZHHyWPL+VkxfmX5vuo8s9PYv6LDHsz+znpCWRBy2q+WrLLAHNjjBABDATXTlRKYWRdWolKf4SoEQCITXW09z2Yg8Nw2HxP90GRr7eB4NHKSM8ZsbvUqsrQ12ezZkH/kA5eA9bwfC5k68T3/7+zvcO/Vij7Kq5EtuESoSVKUlSDGFZdMIqFA1Wvve3Ea2KtxfYB8aXe/D+Kbcm1/pDR594jHr6tDpkrINSizMXc2nASx3RZfFr2dddW4ca0T06l3GoRwOe18n3cw5bO391stbbjYJO7Ol4+0NDdSeKHQck8eirPhaPLuM1/wBwXH06lTCsq+E8xl/qa6qZVLT37dfymX/Eha78iQolaPC9IwRyvLLvZSR3Gw01v+pZIHNLXxhw2m+tLFe26stK6stas7u8eU+bQPqqU8slvDn8kjumMN8j5rahrSusYG8DkNG0WscynTJ0baJHhSAYSY3gdQOiSQpz8Y8YHTvOnophU8d5dur42pkheiG2NovnxKxyvDDqbN0ccnka+S8v+JOPulc0e3b9/wDLq+n37zRrSvIupCJChJFFiQYbV1krQMFQjTTavktGo48JDT7BJDh4np+i9d+Gqare/wBZ1/JyfU58Q0ur4Yhd9pxmlrhy4X4L0uWn+6HMx39pdno+YNT0eN0jBKdlOB62slJ3G2G8amYcXNGzG13T8aN0mxmc9wDzZFtuvqpsV8O5zHD7MLHNK0KqschqPn3uSpQjBJXaOOvxQkfVRK0eG9yONzm8GuCogmWbRv8AcyGhw0XQ9VTJrS+LzK7rn+1f/SsePyy5Pyy5/McKgBAG0+8R0JIWzEeWtM+IXQ/kkdOSqaW2wOyJDk93uOzdQ4490f3UxHYmWYveGkgCwoEYpva3EHkUplECaNvcP972GlwHA58FET3TMNdjv3viijcXNJ9oNPB+firyrDeWGkWegqliXGWN+G+vDlcj1vF8ThX+3f8AZucO/TlhqV4B3YIolFVWCCsrrpIC1A5zO+91uZr+Q1ra9F7r0CIjiQ4fqP8AEbDNgY7CY4jqzleg1uHKidWYOwcr92TBf3bXcBYsfbcMmX2lo88kdr4B4DMP/rCvbypX8rts0n7J8leFFNpO2PnoaVvZVjDyO0WPX/SP6qs+Vons6fKdURNDwVYTbws6MafMf6f3VMviGTF5lm7QE9zEP5iQVTF5ZMn5XP5D3NmFHoR+oWzDWnyugk7vRVSw5DAHhwJBEg/Qf2CjZPsyCRwePHc6jfwSFpQjJ3ht8KUR5ZNRP+jkbQIcACPmFWvlNvCpppuUmgNrqAAoBXt4Y6Nm3r81X2Xlnf8AwXjwLD+i0edWLcbJE/8ArP8A8bOCdZK/q01r5nHh6MWpAqpJB//Z",
    linkedin: "https://linkedin.com/in/alexjohnson",
    phone: "+91 98765 43210",
    email: "president@collegefest.edu",
    bio: "Computer Science senior with a passion for technology and leadership. Leading our team to create the best fest experience.",
  },
  {
    name: "Priya Sharma",
    role: "Vice President",
    image: "data:image/jpeg;base64,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",
    linkedin: "https://linkedin.com/in/priyasharma",
    phone: "+91 98765 43211",
    email: "vicepresident@collegefest.edu",
    bio: "Electronics Engineering junior who loves organizing events and bringing creative ideas to life.",
  },
  {
    name: "Rahul Patel",
    role: "General Secretary",
    image: "data:image/jpeg;base64,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",
    linkedin: "https://linkedin.com/in/rahulpatel",
    phone: "+91 98765 43212",
    email: "secretary@collegefest.edu",
    bio: "Mechanical Engineering student with exceptional organizational skills and attention to detail.",
  },
  {
    name: "Ananya Gupta",
    role: "Treasurer",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2gMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAACAwQAAQUGB//EADMQAAICAgAFAwIDCAIDAAAAAAECAAMEEQUSITFBE1FhInEGgZEUIzJiobHB0UJSguHw/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QAIBEBAQADAAICAwEAAAAAAAAAAAECAxEhMQQSIkFhMv/aAAwDAQACEQMRAD8A+dUpL6UiKUl1KTTykOqSWVLFVJLKliBlayitYNax6LKNqscBNKIwCVGgIQE2BCgDqaIhwSIIAiCRGERNy5ZXeNiNYP8Asx5RM5ZzGeWscLl6YRAaS5NnEsQB78Otq/PJZ1H6zWHxPFzGKVORaBs1v0YTOOzHL1WsteWH+opgMIc0ZtgoiAYxhBIgJYRREewimEBJEWwj2EU0gSRFtHNFNAS0XGPFwhVS9pbUsnpWW0iRo+pZXWsRWJVXNByCPQRSdo5ZUMWMAi1jBCNzBMmCVONwTNzRkU3CrW7MSthsdyJ6i1RXSQlfx2nh8q+3Gc20X3VPycu6VBbqfnoIvheTxYcD4hk512WwJ5avVYEn+pnFtv5Xr6GjH8fDo8a29b71rr2nzHi7lLRZSxS5H5ldehBnZPDb0xv2o1XZNrHY/eNpfy7Th8aRq/qepq2K7ZG8GeWrGS9je624cse24Rmft3DqMnsXXZHz5lZnE/CBA4NUvMCVZt+46ztz6Mr51nAmCYTQDCFtFERrRZgKaKaOaKaQLaKaMaKaAp4qMeLhDKh2ltQktQ7SyoSNKa5QkQkekoescsSsaDKhqwgYsGFuVBzNwQZvcDc0Zm4O4FuHn4nD8e2zLClm1rY+dAfrOXx7O4w+HeMa3FGP6m0UqF5l15BMmzDU+bVj5a81GRyqeutEHf8AmdK9hwvAOHi8Ja9dErcUWzv7s3XzODOT7X7PpasvwnHm+DfiE4fqY2dyq9r/AEADQUnwPE87+Kss5Vrsw14nSzTVTYczIx0F2/oTlA186E83Yxz86upjs22AMfuYwxly7GdudmPK9T+F2c337PTkGyOx9j/U/pPQxGLj041fJQgUeY4zrxlk8uLPL7XsaMEzZ6QGM2yFjFNDYxbGRQNFtDaLaELaKeMaLaAl4qMeLgU1eJZXI6pVWZFVJKEMlQyhDLBQDDBiVMYDKhoMIGKDQgYDNzcXub3AOZBBm9wJOI4pzMc1oxWwHmrcd0YdjPH8R/FHGcNnxcpSjKNE66H5nuQyragLaJYdJz/xNiVKr3WUi1OX+EDZE5t2cmUljq0YZZY+Lx82tzMzOs/eOx33M6XB8VaczHLaO7V6/nG42EztzBOUHwRKcrHNVI5Ojg7BHgzF2z03NV52vYTRnn8X8RNVSg4jSQ3b1E7H8p18XMx8yv1Me1bF/lPUTqllnY47OXlOYwT2mMYBMoBjAYzbGLYx0aYwCZsmATABjFuYbGLaEKaLhsYG4FFfiU1yWs9pShmVVIY5TJkMcplDwY1TEK0MGUOBhbiQYQaA3cLcVuJzMj0qwFP1t2+JYlPuyKqB+8bR9vMhuz7bPpoXlX/t3MnA6jQ2x6kw+UeO0rPR4lxxshb7QXHUN76nd9bEzaCteTWw8bYA/pPPux95FkY9Vv8AGgO/Gp47dGOzy6NO/LXOOnmYuNjKztfUpPYFxODn5eMh1Ru5vjoIQwqqutaKu/OoJpHsN/aYx+NjPd61n8rO+pxyLhbcxe09+wHTUKml6nD1MyOPK9Jea15tEajGqCEHwe86JJJyOS9t7RYnGcirSZSi1e3OBphOvVkVXoLKrAynp095w3pU9vvInstxbzbjvya6HXn4hZePUsYBMmxMtcvHS1dAnow9jG7mW2yYBMwmATAxjFtCJi2MIU5gbhOYGxKH1mUoZHWZQhmVVIY4GTIY1W6QqhWhhogGGGlQ8NCBiA0MNHQ4GcfOyR+2d+if4nSZwqsx7Abnmbm3kKWYBWOiT43NRmuxjt+5Dt1LdYbNqc3Cy2yHb00AROnM3j4A8mWsw+/2lRt33FF9b1BIaxxXWhZ2OgoGyTFvz1u1ViFbAdMrDREdi8OPfrAbXtNg7B1AY6HSArKXS+prt8TN8ya3rfTtMvdih0w7ee0h/alD+ns848GEOvu9LEdunOukH3MhyAFxGdugXp1+ZPfcfXNI66uLa9/b+picrIN7JQuylRJb+Zv9CEV8EyvQzTSx+m4a/wDLxPRkkTxNhNdgcH6lIOx7ievqsFtSWeGUGZrWJpMEmCTBJkabJgMZhMBjAFjF7m2MCVD6zHoZJWY9WmVVoYwGTK0MNCqQ0MNJg0MPApBmwYgNDBBlGZlnLjv7t0E89nEFCOnY7Hv8TqcTvACr7fUZ5/Mu5tmajFdHhV9bUarDbXo3tvzPT8M4Yj1Jk5BDVsNqvPoD4Y/4E8PwLLStyjo1m7B9CdyD7T1NyIa2bPzDjYnP+7w6zplG/JHb7Tw353Gcjp+LhMr2vSUY3oOrpj8NJU7V0chl/PXeSfiu3HsqCKlbZmubmfXNy+wbvJuFrwz10OJRm2Hx6juR/qTcYK2Z9jLQqFRro2yfjU5PtlL7fQuGNnOOKt42VPT85j2yfiVFiMWoABPUA+ROYmawYrZzKw7hvE7tWz74/wBfL3a7ry/jo32gA7IH5zjZrMTzId6P0sDH35auugROZcRskCejw70WOLbnd99T3djrQlFdDhCyAqn/ACdjrf8AqZgK3pAqisO/1NqUXczaNyFyOw5+g+w1KILOTfKjBteQOn5T03CbObh1HwNfpPOWgHqq6/OdngVm8Jl/6WEfqAZKuLploBaaJgkzLYiYJMEtAJhG2MDc0xgbmg5GjlaSI0arTCqlMaGkqtDVoFQMIGTq0MNCqAYXN0MQGiOI3GvGPK2ix5d/6hHM4lmq1jnnXZ7jfUTlstuRaEqHNvqCD0/WdOs166qp+W6zduUiJyIFA12A1PR5rfwxwmurJbId2NtADfAPjUuz+I14mRy4/D19R062kcxJ8nZ7TzFPGMnFVvSI052y++pp+Ps+vUqJYduuhOPZryyzfQ07cMdfP277/ifM0KcpLRWem1PaNxrEbdvqhg3ZgdzxlnEstySbdAn+EAaEyjiGTjsWqYDfdfBi6LxZ8qPbqgvYDY0PEziPBcfIxfXuXlCdOdT1nlcbjjq27E18qZdkcftuxTSjkqw6dekxNWcyay3a8sfLj5OE1W3pY207P3ElYNykgbE6dN40oB0Oqj7f/bhWYlGQCRtHKc5K/fXad/HzuxPw6zVSjcufTAySjAurANbI6dxo9dRxJUaf6T7MpH9xDNT3jrv+0t4E+hcnyGkjrzL0cEeQDGcJPLlWL4KSUnt2i0EmAWglpl6DJgEwS0AtKgiYHNBYwIZOVo1WkymMBmW1KtDUyYNGK0ClTDDSdWhhoU8NOfx0kYiOvUK/9xqVgwcisX0PUT/ENbhHmWzGC68xIuLWbY9usHKx7se3kuXR30I7N9oynAy7dBaGAPluk11nhD2fT1i0GzuU8QwnxLkqZtsV2SO35TVVUq3wSVmh0lTV6OjFvXrxCdKA9oSWnfKekzli2HmFVK2hpekqx8jr3/5KOv33r+k5iOR0jBZ2/WGbHVquICjfTbf3/wDcNsggnfbp3nKFrAAA612mG4nZ89pRW1vTYAPXzC4a+8tj/KekgL9D95Xwon12Pjl6mSkdknvBLQC0EmRoXNBLQeaATCdbZoPN8wSYO4Q9YQJmTJGjFMIEzJkimKTGKTMmQDBM2DvvMmQCfoRC3MmQrk8fVScckdyR+UjRFHQDoZkybjGXsDAamgoK9ZkyVkllETaAuiJkyRSbBrqPMFSZkyRse5gM3MhK3OnwwAUM3kuZkyVFZg7mTIKEmCTMmSIAmDNTIR//2Q==",
    linkedin: "https://linkedin.com/in/ananyagupta",
    phone: "+91 98765 43213",
    email: "treasurer@collegefest.edu",
    bio: "Finance major with experience managing budgets for large-scale events and activities.",
  },
]

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on client side
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/fest-bg.jpg" alt="College Fest Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with the team behind this year's most exciting college fest!
            </p>
          </div>

          {/* Society Contact Information */}
          <motion.div
            variants={fadeIn}
            className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/10 mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Fest Headquarters
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <a href="mailto:contact@collegefest.edu" className="text-gray-300 hover:text-white transition-colors">
                  contact@collegefest.edu
                </a>
                <a href="mailto:info@collegefest.edu" className="text-gray-300 hover:text-white transition-colors">
                  info@collegefest.edu
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <a href="tel:+919876543200" className="text-gray-300 hover:text-white transition-colors">
                  +91 98765 43200
                </a>
                <a href="tel:+919876543201" className="text-gray-300 hover:text-white transition-colors">
                  +91 98765 43201
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Us</h3>
                <p className="text-gray-300">
                  College of Engineering
                  <br />
                  University Campus
                  <br />
                  New Delhi, 110001
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Team Members */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Meet Our Team
              </span>
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10 group"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-purple-400 font-medium">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-gray-300 text-sm">{member.bio}</p>

                    <div className="pt-2 space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-purple-400" />
                        <a
                          href={`tel:${member.phone.replace(/\s+/g, "")}`}
                          className="text-sm text-gray-300 hover:text-white"
                        >
                          {member.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-purple-400" />
                        <a href={`mailto:${member.email}`} className="text-sm text-gray-300 hover:text-white">
                          {member.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-purple-400" />
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-white"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Event Details */}
          <motion.div
            variants={fadeIn}
            className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/10"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Fest Details
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Dates</h3>
                  <p className="text-gray-300">October 15-17, 2025</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Venue</h3>
                  <p className="text-gray-300">Main Campus Grounds</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Registration</h3>
                  <p className="text-gray-300">Opens September 1, 2025</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Main Events</h3>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>Tech Hackathon</li>
                    <li>Cultural Night</li>
                    <li>Battle of Bands</li>
                    <li>Robotics Competition</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Sponsors</h3>
                  <p className="text-gray-300">For sponsorship inquiries, please contact:</p>
                  <a href="mailto:sponsors@collegefest.edu" className="text-purple-400 hover:text-purple-300">
                    sponsors@collegefest.edu
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

