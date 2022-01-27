import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import "./reference.css";
function Reference(store) {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="Publications-body">
      <div className="Publications-outline">
        <div>
          <br />
          <text className="Publications-title">
            1. Larranaga, P., Calvo, B., Santana, R., Bielza, C., Galdiano, J.,
            Inza, I., Lozano, J.A., Armananzas, R., Santafe, G., Perez, A. et
            al. (2006) Machine learning in bioinformatics. Brief Bioinform, 7,
            86-112.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            2. Libbrecht, M.W. and Noble, W.S. (2015) Machine learning
            applications in genetics and genomics. Nature Genetics, 16, 321-332.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            3. Cao, D.-S., Xiao, N., Xu, Q.-S. and Chen, A.F. (2015) Rcpi:
            R/Bioconductor package to generate various descriptors of proteins,
            compounds and their interactions. Bioinformatics, 31, 279-281.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            4. Xiao, N., Cao, D.-S., Zhu, M.-F. and Xu, Q.-S. (2015)
            protr/ProtrWeb: R package and web server for generating various
            numerical representation schemes of protein sequences.
            Bioinformatics, 31, 1857-1859.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            5. Avsec, Ž., Kreuzhuber, R., Israeli, J., Xu, N., Cheng, J.,
            Shrikumar, A., Banerjee, A., Kim, D.S., Beier, T. and Urban, L.
            (2019) The Kipoi repository accelerates community exchange and reuse
            of predictive models for genomics. Nature biotechnology, 37,
            592-600.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            6. Kopp, W., Monti, R., Tamburrini, A., Ohler, U. and Akalin, A.
            (2020) Deep learning for genomics using Janggu. Nature
            communications, 11, 1-7.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            7. Chen, K.M., Cofer, E.M., Zhou, J. and Troyanskaya, O.G. (2019)
            Selene: a PyTorch-based deep learning library for sequence data.
            Nature methods, 16, 315-318.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            8. Chen, Z., Zhao, P., Li, C., Li, F., Xiang, D., Chen, Y.Z.,
            Akutsu, T., Daly, R.J., Webb, G.I., Zhao, Q. et al. (2021)
            iLearnPlus: a comprehensive and automated machine-learning platform
            for nucleic acid and protein sequence analysis, prediction and
            visualization. Nucleic Acids Res, 49, e60.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            9. Li, H.L., Pang, Y.H. and Liu, B. (2021) BioSeq-BLM: a platform
            for analyzing DNA, RNA and protein sequences based on biological
            language models. Nucleic Acids Res.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            10. Li, W. and Godzik, A. (2006) Cd-hit: a fast program for
            clustering and comparing large sets of protein or nucleotide
            sequences. Bioinformatics, 22, 1658-1659.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            11. Lin, T.-Y., Goyal, P., Girshick, R., He, K. and Dollár, P.
            (2017), Proceedings of the IEEE international conference on computer
            vision, pp. 2980-2988.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            12. Chawla, N.V., Bowyer, K.W., Hall, L.O. and Kegelmeyer, W.P.
            (2002) SMOTE: synthetic minority over-sampling technique. Journal of
            artificial intelligence research, 16, 321-357.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            13. He, H., Bai, Y., Garcia, E.A. and Li, S. (2008), 2008 IEEE
            international joint conference on neural networks (IEEE world
            congress on computational intelligence). IEEE, pp. 1322-1328.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            14. LeCun, Y., Bengio, Y. and Hinton, G. (2015) Deep learning.
            nature, 521, 436-444.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            15. Rumelhart, D.E., Hinton, G.E. and Williams, R.J. (1986) Learning
            representations by back-propagating errors. nature, 323, 533-536.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            16. Hochreiter, S. and Schmidhuber, J. (1997) Long short-term
            memory. Neural computation, 9, 1735-1780.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            17. Graves, A. and Schmidhuber, J. (2005) Framewise phoneme
            classification with bidirectional LSTM and other neural network
            architectures. Neural networks, 18, 602-610.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            18. Wang, Q. and Hao, Y. (2020) ALSTM: An attention-based long
            short-term memory framework for knowledge base reasoning.
            Neurocomputing, 399, 342-351.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            19. Dey, R. and Salem, F.M. (2017), 2017 IEEE 60th international
            midwest symposium on circuits and systems (MWSCAS). IEEE, pp.
            1597-1600.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            20. Dos Santos, C. and Gatti, M. (2014), Proceedings of COLING 2014,
            the 25th International Conference on Computational Linguistics:
            Technical Papers, pp. 69-78.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            21. Lai, S., Xu, L., Liu, K. and Zhao, J. (2015), Twenty-ninth AAAI
            conference on artificial intelligence.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            22. Simonyan, K. and Zisserman, A.J.a.p.a. (2014) Very deep
            convolutional networks for large-scale image recognition.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            23. Wang, J., Yang, Y., Mao, J., Huang, Z., Huang, C. and Xu, W.
            (2016), Proceedings of the IEEE conference on computer vision and
            pattern recognition, pp. 2285-2294.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            24. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L.,
            Gomez, A.N., Kaiser, Ł. and Polosukhin, I. (2017), Advances in
            neural information processing systems, pp. 5998-6008.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            25. Kitaev, N., Kaiser, Ł. and Levskaya, A.J.a.p.a. (2020) Reformer:
            The efficient transformer.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            26. Choromanski, K., Likhosherstov, V., Dohan, D., Song, X., Gane,
            A., Sarlos, T., Hawkins, P., Davis, J., Mohiuddin, A. and Kaiser,
            L.J.a.p.a. (2020) Rethinking attention with performers.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            27. Wang, S., Li, B.Z., Khabsa, M., Fang, H. and Ma, H.J.a.p.a.
            (2020) Linformer: Self-attention with linear complexity.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            28. Roy, A., Saffar, M., Vaswani, A. and Grangier, D. (2021)
            Efficient content-based sparse attention with routing transformers.
            Transactions of the Association for Computational Linguistics, 9,
            53-68.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            29. Ji, Y., Zhou, Z., Liu, H. and Davuluri, R.V. (2021) DNABERT:
            pre-trained Bidirectional Encoder Representations from Transformers
            model for DNA-language in genome. Bioinformatics.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            30. Elnaggar, A., Heinzinger, M., Dallago, C., Rihawi, G., Wang, Y.,
            Jones, L., Gibbs, T., Feher, T., Angerer, C. and Steinegger,
            M.J.a.p.a. (2020) ProtTrans: towards cracking the language of Life's
            code through self-supervised deep learning and high performance
            computing.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            31. Kipf, T.N. and Welling, M.J.a.p.a. (2016) Semi-supervised
            classification with graph convolutional networks.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            32. Zhu, J., Cui, Y., Liu, Y., Sun, H., Li, X., Pelger, M., Yang,
            T., Zhang, L., Zhang, R. and Zhao, H. (2021), Proceedings of the Web
            Conference 2021, pp. 2848-2857.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            33. Pho, P. and Mantzaris, A.V. (2020) Regularized Simple Graph
            Convolution (SGC) for improved interpretability of large datasets.
            Journal of Big Data, 7, 1-17.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            34. Lin, Y., Meng, Y., Sun, X., Han, Q., Kuang, K., Li, J. and Wu,
            F.J.a.p.a. (2021) BertGCN: Transductive Text Classification by
            Combining GCN and BERT.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            35. Veličković, P., Cucurull, G., Casanova, A., Romero, A., Lio, P.
            and Bengio, Y.J.a.p.a. (2017) Graph attention networks.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            36. Wei, M., He, Y. and Zhang, Q. (2020), Proceedings of the 43rd
            International ACM SIGIR Conference on Research and Development in
            Information Retrieval, pp. 2367-2376.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            37. Chandra, S., Mishra, P., Yannakoudakis, H., Nimishakavi, M.,
            Saeidi, M. and Shutova, E. (2020) Graph-based modeling of online
            communities for fake news detection. arXiv.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            38. Becht, E., McInnes, L., Healy, J., Dutertre, C.-A., Kwok, I.W.,
            Ng, L.G., Ginhoux, F. and Newell, E.W. (2019) Dimensionality
            reduction for visualizing single-cell data using UMAP. Nature
            biotechnology, 37, 38-44.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            39. Lundberg, S.M. and Lee, S.-I. (2017), Proceedings of the 31st
            international conference on neural information processing systems,
            pp. 4768-4777.
          </text>
        </div>
        <div>
          <br />
          <text className="Publications-title">
            40. Bailey, T.L., Boden, M., Buske, F.A., Frith, M., Grant, C.E.,
            Clementi, L., Ren, J., Li, W.W. and Noble, W.S.J.N.a.r. (2009) MEME
            SUITE: tools for motif discovery and searching. 37, W202-W208.
          </text>
        </div>
      </div>
    </div>
  );
}

export default inject("store")(observer(Reference));
