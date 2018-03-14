/**
 * Your goal in this exercise is to complete an adjacency map
 *
 * You'll be passed in an array of "Nodes", each Node is a vertex in a graph.
 * The passed nodes have their parent information but not their children. Create
 * this information and return the entry point of the graph, the node without
 * any parent.
 */

/**
 * @typedef {Object} Node
 * @property {number} id The id of the node
 * @property {number|null} parent The id of the parent node
 */

/**
 * @typedef {Object} FilledNode
 * @property {number} id The id of the node
 * @property {number|null} parent The id of the parent node
 * @property {[FilledNode]} children An array of children FillNodes
 *
 * A filled node has its complete children information, which are themselves
 * FilledNodes
 */

/**
 * @typedef AdjacencyGraph
 * @property {[FilledNode]} head The entry point of the graph
 */

class Adjacency {
  /**
   *
   * @param {[Node]} nodes An array of input Nodes
   * @returns {AdjacencyGraph} An adjacency graph
   */
  static fillGraph(nodes) {}
}

module.exports = Adjacency
