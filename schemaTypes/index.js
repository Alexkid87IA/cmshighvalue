import blockContent from './blockContent'
import category from './category'
import post from './post' // Vous pouvez le laisser pour l'instant
import author from './author'
import amuseBouche from './amuseBouche'
import emission from './emission'
import essentiel from './essentiel'
import article from './article' // <--- AJOUTEZ CETTE LIGNE (assurez-vous que le chemin est correct)
import debate from './debate'
import test from './test'
import tag from './tag'
import sectionType from './sectionType' // <--- AJOUTEZ CETTE LIGNE pour importer le nouveau schéma

export const schemaTypes = [
  article, // <--- AJOUTEZ 'article' ICI, en première position c'est bien
  post,    // Vous pourrez supprimer 'post' plus tard si vous ne l'utilisez plus
  author,
  category,
  blockContent,
  amuseBouche,
  emission,
  essentiel,
  debate,
  test,
  tag,
  sectionType // <--- AJOUTEZ 'sectionType' ICI à la fin du tableau
]
