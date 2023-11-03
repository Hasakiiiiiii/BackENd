const express = require('express')
const router = express.Router()
const {
    getPeople,
    PostPeople,
    postPeoplePostMan,
    putPeople,
    deletePeople
} = require('../controller/people')

let { people } = require('../data')

// router.get('/', getPeople)
// router.post('/', PostPeople)
// router.post('/postman', postPeoplePostMan)
// router.put('/:id', putPeople)
// router.delete('/:id', deletePeople)

router.route('/').get(getPeople).post(PostPeople)
router.route('/postman').post(postPeoplePostMan)
router.route('/:id').put(putPeople).delete(deletePeople)


module.exports = router