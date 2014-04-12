var collision = require("../lib/collision")
var assert = require("assert")
var migawari = require("migawari")

describe("collision", function(){
  var isCollide = function(searchs , target){
    var result = collision([searchs], target)
    //console.log(migawari(scapegoat).toString())
    return (result[0] == searchs)
  }

  it("basic", function(){
    //console.log(require("migawari")("a b p").toString())
    assert(isCollide("a", "a b"))
  })
  it("basic", function(){
    assert(isCollide("b", "a b"))
  })
  it("class", function(){
    assert(isCollide(".foo", "a.foo"))
  })
  it("universal class and div", function(){
    //assert(!isCollide("div", ".foo")) // Hmmmmm
  })
  it("dummy div", function(){
    assert(!isCollide("div", "a b"))
  })

  it("jump elment", function(){
    assert(isCollide("p", "a b p"))
    assert(isCollide("a p", "a b p"))
  })
  it("same selector", function(){
    assert(isCollide("a b", "a b"))
    assert(isCollide("b", "b"))
    assert(isCollide("b + p", "b + p"))
  })
  it("sibilings", function(){
    assert(!isCollide("b + p", "a b ~ p"))
    assert(isCollide("b ~ p", "a b ~ p"))
  })
  it("brother", function(){
    assert(isCollide("b + p", "a b + p"))
    assert(isCollide("b ~ p", "a b + p"))
  })
})
