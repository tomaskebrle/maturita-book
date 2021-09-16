import { getBookFromBookId } from "../../../lib/firebase";

export async function getServerSideProps({ query }) {
  const { bookid } = query;

  const bookDoc = await getBookFromBookId(bookid);

  let book = null;
  if (bookDoc) {
    book = bookDoc.data()
  }


  return {
    props: { book: book },
  }
}

export default function category({ book }) {
  let bookPoints = book.points;
  return (
    <section className="lg:grid lg:grid-cols-6 w-full">
      <div className="sidebar mx-4 max-w-full lg:col-span-1 p-4 bg-gray-100 rounded-md">
        <ul>
          <li className="w-full flex justify-center mb-8">
            <img src={book.thumbnail} alt="" className="mx-8" />
          </li>
          <li className="">
            <h1 className="text-4xl">{book.name}</h1>
            <h2 className="text-gray-500 text-2xl">{book.author.replace(':', "")}</h2>
            <ul>
              <li>
                <b>Body: </b> {book.points}
              </li>
              <li>
                <b>Poznámky: </b> {book.notes}
              </li>
              <li><b>Počet Stránek: </b>{book.pages}</li>
            </ul>

            <div className="flex">
              <button className="bg-green-500 text-white p-1 grid place-items-center m-1 rounded-sm select-none" onClick={() => { }}>
                <span className="material-icons">
                  expand_less
                </span>
              </button>
              <div className="p-1.5">{book.points}</div>
              <button className="bg-red-500 text-white p-1 grid place-items-center m-1 rounded-sm select-none" onClick={() => { bookPoints-- }}>
                <span className="material-icons">
                  expand_more
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-span-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolorem eius non et nemo aut voluptatum animi? Autem, voluptatibus similique? Iste itaque repudiandae dolore dicta quisquam autem id cupiditate nisi.
        Nisi blanditiis autem est quibusdam et aut minima id corporis recusandae impedit quia odio veritatis ex ratione obcaecati adipisci quisquam eligendi libero eaque cupiditate laborum, dolore cumque laudantium sunt? Quibusdam.
        Consequuntur quos dignissimos, omnis quibusdam cumque facilis quisquam asperiores laborum, dolores aliquid voluptatum libero eos quo, reprehenderit voluptatibus? Aperiam et sunt eos vero ipsum illum natus modi rem ipsa! Tempore.
        Optio eos officiis perspiciatis excepturi. Tempora nisi ab itaque laudantium libero voluptatem provident enim ducimus dolor? Velit, impedit? Possimus, molestias omnis. Aperiam officiis aspernatur molestiae labore in iure dicta explicabo?
        Impedit nesciunt perferendis facilis ipsam ullam qui blanditiis debitis neque at excepturi ex praesentium, iusto optio? Neque nam rem rerum sit nemo, sunt quibusdam fuga, quisquam voluptatum odio veritatis consequatur.
        Dignissimos, blanditiis rerum voluptates quae sunt ullam ea provident obcaecati, sint possimus nisi dolores esse! Alias, repellat obcaecati illo repellendus voluptas facere temporibus sed quibusdam at voluptates, ratione quod adipisci?
        Soluta temporibus, magnam accusamus labore quasi dolore? Doloremque ut, corporis iusto ad nulla aspernatur modi est non dolor vel placeat excepturi. Voluptatum minus esse, dolorum nostrum autem mollitia quam alias.
        Aperiam vitae praesentium dicta natus. Veritatis ratione animi quaerat, iure nesciunt quas unde? Vel labore exercitationem quia similique. Ut dignissimos, quas doloribus dolor quibusdam perferendis vero accusamus placeat amet ipsa!
        Tenetur, quasi delectus voluptas doloribus praesentium sequi fugit ex iste ipsa officia inventore, magni itaque, repellat ratione consectetur dolore dolor soluta ipsum explicabo natus architecto commodi exercitationem vitae esse? Doloremque!
        Quos repellat laudantium explicabo, adipisci officiis excepturi quo sit nulla, deleniti, nostrum nesciunt ab amet saepe commodi enim possimus quam! Perferendis, autem libero quisquam pariatur praesentium quas tempore doloremque cum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti sit esse libero temporibus commodi alias unde nemo deserunt harum ullam doloremque, repudiandae earum illo ipsum sequi quasi error molestias!
        Ducimus adipisci hic laborum ipsa, quidem illum minus illo qui officiis explicabo quaerat excepturi, quam laudantium enim dignissimos reiciendis aspernatur nihil ad veritatis vitae nisi? Placeat quibusdam nesciunt exercitationem ex?
        Sapiente, exercitationem saepe doloremque adipisci quibusdam qui, ab tempore debitis asperiores natus ea. Quasi dolores, id magnam voluptatibus, exercitationem impedit facilis accusantium officiis esse dicta, voluptate odio rem saepe perferendis.
        Nesciunt, neque ipsa! Numquam, facere magnam. Repellendus quae suscipit quas fuga voluptatum, repudiandae illo aliquam. Optio, inventore pariatur minus vero officia officiis magnam placeat cumque commodi ea ab porro est?
        Velit a exercitationem non tempora omnis distinctio error labore veritatis saepe sed aspernatur reiciendis, quia magnam atque maiores voluptas quasi? Provident modi natus laborum commodi voluptatibus magni doloribus sit unde!
        Fugit illo perspiciatis iste voluptates quam nostrum ducimus, quas doloremque eveniet illum, aliquam, quidem voluptate. Maxime saepe delectus omnis. Sunt explicabo inventore delectus. Ducimus distinctio doloribus, nisi voluptate autem dolore!
        Doloremque deleniti a optio? Neque non quia, totam autem consequuntur, maiores, sint dolores animi illo cum est qui deserunt? Aspernatur odio eum corrupti eveniet blanditiis? Porro in laudantium eaque vitae!
        A, eligendi? Praesentium numquam corrupti at necessitatibus eius harum ipsum reprehenderit, dignissimos sit, saepe optio quibusdam! Blanditiis cum aperiam earum obcaecati culpa porro placeat quam unde nihil veniam, eos perferendis.
        Animi quis ut obcaecati, iste blanditiis quasi, nemo nostrum officiis non enim ex nisi ipsa delectus totam quo ipsum magni, modi id molestias quos eveniet odit deleniti praesentium. Neque, iure.
        Iste, consequatur atque. Pariatur, veniam dolore qui laboriosam sequi recusandae culpa. Aliquam incidunt velit commodi voluptates. Quasi mollitia ullam sapiente ipsa magnam natus laboriosam perferendis. A tenetur facere consequuntur neque!
        Iure nostrum dicta fuga qui, sapiente dolore, quos deserunt aut veritatis numquam inventore consequuntur magnam adipisci ullam, cum nulla! Perferendis dicta amet veniam laborum nostrum. Atque obcaecati necessitatibus aspernatur fugiat.
        Ipsum explicabo commodi doloremque, cum sed consectetur corporis possimus harum dignissimos ipsam nulla rerum tempora debitis velit optio nobis consequatur nihil error? Assumenda quod corrupti velit incidunt voluptas, vel animi?
        Amet culpa praesentium nemo, delectus non eaque, quia ab suscipit dolorem quisquam dolorum quos commodi fugit vitae dicta excepturi. Obcaecati autem incidunt consequuntur praesentium perspiciatis molestias quaerat eveniet, quidem nulla.
        Quae deserunt placeat totam possimus molestiae sit quo hic cumque explicabo dignissimos et cum ratione, vel est! Voluptatibus nobis, ducimus laudantium mollitia quam quos? Inventore dolor quisquam quod recusandae aspernatur.
        Saepe dignissimos quisquam aut ducimus odio quos beatae eligendi! Quis, rem pariatur, minus ipsam placeat in magnam non odio perspiciatis fuga nostrum accusamus vitae culpa, nam consectetur quisquam aspernatur ratione!
        Earum adipisci itaque nam atque? Ipsa quidem nam consequatur necessitatibus veritatis consequuntur accusantium eligendi, dicta excepturi iste inventore maxime error magnam amet reprehenderit. Debitis repellat a facere fugit velit amet.
        Facilis modi, debitis voluptas necessitatibus laudantium molestias praesentium vero ullam enim illo nemo, tempora non sunt cum aut, veritatis explicabo. Saepe tenetur officia iste. Maxime rem eius voluptate ipsum impedit.
        Tempora repellat culpa numquam a repudiandae nemo ullam voluptatum voluptas nam ut, placeat quas, labore eaque quis accusamus totam hic natus inventore perferendis, reiciendis praesentium odit nesciunt sit ipsam? Rem.
        Id delectus animi ab repellat repudiandae itaque, libero labore provident quod autem eligendi qui? Quasi ipsam illo expedita, id, placeat vero ratione quae quaerat laborum perspiciatis ut quia quos iste?
        Error, quas? Praesentium voluptate consectetur sed totam reprehenderit mollitia, inventore saepe dolorem recusandae sunt vero iure! Quaerat reprehenderit aperiam nisi iste facilis qui sit vitae tenetur? Vero alias maxime debitis?
        Illum, accusantium neque aspernatur numquam quod minus iusto. Porro laudantium hic possimus odit id officiis nostrum accusamus earum necessitatibus ullam temporibus alias exercitationem, totam, maxime sit cupiditate. Amet, doloribus similique.
        Eum perspiciatis, assumenda laborum eos, natus voluptas beatae ab ipsum non excepturi illum. Minima rem vitae provident porro, repellendus, autem odio eius, exercitationem ad nihil vero tenetur illum doloremque quos.
        Voluptas inventore iusto aspernatur ullam necessitatibus dolores explicabo corporis. Praesentium sit asperiores quis aliquid ea architecto neque facere perferendis inventore dicta cumque nesciunt, porro quo velit ipsam aliquam nulla sunt!
        Atque dolor amet vel quis nobis sit aperiam est ratione quaerat excepturi, enim, debitis recusandae minima fuga culpa natus officiis autem pariatur eaque! Optio architecto facilis quae quam, illo ut.
        Sed sapiente laborum accusamus, veritatis fugiat ipsam nesciunt alias quod voluptatum recusandae optio perspiciatis exercitationem mollitia iste consectetur est laudantium fuga! Aspernatur sunt rem reiciendis corporis modi molestiae veritatis quidem?
        Veniam consequatur consectetur architecto omnis fuga repellendus hic aspernatur mollitia aliquam corrupti ducimus obcaecati fugiat totam perspiciatis, ipsa ipsam. Distinctio consequuntur iure quis delectus id quisquam suscipit ut, dolores unde!
        Fugit, consequatur iste ea excepturi debitis, maiores ducimus asperiores molestias enim assumenda porro repellendus corrupti tenetur voluptates recusandae veritatis possimus ad saepe inventore, ipsum dolor et doloremque alias. Quasi, iusto!
        Inventore iure perspiciatis pariatur magni minus numquam fugiat ratione molestiae a voluptatem, repellendus iste sapiente adipisci laboriosam vitae accusamus eos consectetur ipsum quibusdam quis similique neque, necessitatibus nesciunt sunt! Sint?
        Cupiditate quisquam consequuntur quos iste sapiente atque error quibusdam accusamus nam omnis dolores possimus sit voluptatum, vero quae, consectetur quas temporibus ea pariatur quaerat aspernatur rem quia quo expedita. Deleniti.
        Eveniet accusamus atque ipsa ab fugit adipisci laboriosam ex! Ipsa maiores ut culpa, facilis accusantium consequuntur eligendi iste nisi quibusdam aut provident voluptatum ipsum soluta numquam architecto rerum magni suscipit.
        Veniam nulla placeat commodi. Dolorum earum inventore maxime architecto dolore tenetur cum quis perferendis debitis ratione, eos iste ducimus nulla recusandae beatae? Magni corporis accusamus ratione hic quo iure fugiat?
        Vel repellat architecto dolorum voluptas accusamus asperiores quisquam distinctio. Quidem cupiditate reprehenderit itaque, enim cum dolorem dolor! Necessitatibus dolor, consectetur nihil, animi veniam molestias temporibus et beatae unde, deserunt nemo.
        Cupiditate in nam inventore iusto eaque beatae ad debitis atque! Iusto, molestias id. Recusandae, iste deserunt quia itaque beatae, quas dolorem eveniet quidem odio totam, qui laudantium! Illo, repellat inventore.
        Ipsam, et deleniti expedita aliquam quasi fuga laboriosam omnis, ipsa, doloremque quo enim accusantium magnam. Quos inventore quidem amet quis, nobis nulla laboriosam nemo quibusdam nihil temporibus, odit ullam debitis?
        Nulla dicta molestiae atque in distinctio minus vero doloremque temporibus quod! Iure accusamus repellendus, obcaecati rerum non pariatur quae repellat labore tempore deleniti quo similique esse laborum? Rem, quis inventore.
        Assumenda velit dolorem consectetur, corporis quos sint? Excepturi suscipit nesciunt molestias esse iure dicta voluptatum fuga, tempora aut mollitia modi qui quam quidem cumque, debitis ratione dignissimos. Velit, ipsam ratione.
        Facere dignissimos similique quibusdam necessitatibus laborum illo suscipit expedita nisi totam neque maiores nemo cumque quasi aliquam, eos placeat optio aliquid, at ratione harum non odit. Nobis doloremque dicta quod!
        Inventore recusandae nulla numquam ut illum velit maiores nostrum quasi natus necessitatibus ea, rerum id magnam dolorem esse perferendis sit delectus ullam vitae asperiores ad? Iste consectetur labore harum corporis.
        Beatae corrupti obcaecati officia animi eos, nisi nihil illum asperiores repellat atque magnam incidunt doloribus odio quibusdam, nesciunt possimus aliquid nam dolorem. Ducimus iusto molestias asperiores et quae numquam alias?
        Nulla dicta consequatur pariatur eius omnis, quam magni perspiciatis soluta asperiores ullam quasi quae nostrum ratione porro distinctio expedita quis architecto explicabo. Similique, consectetur beatae. Labore enim fuga est sunt?
        Ducimus ab delectus mollitia sunt nam iste quo ipsum. Soluta perferendis quibusdam numquam obcaecati mollitia excepturi eius molestiae consequuntur dolor aliquid sunt provident voluptas earum eum unde sed, id quas.
        Atque, est explicabo molestiae ea architecto consequuntur debitis vitae veritatis saepe in dolores sint, omnis consequatur. Accusamus quam neque ea? Aliquid neque molestias id odio harum aperiam et, nisi omnis?
        Accusantium omnis, consectetur eius laborum minima molestiae eos molestias voluptatem iusto exercitationem quibusdam dolores, soluta rem. Officia ipsum sed nam ratione repellendus autem aut ad, impedit, aliquam beatae provident repellat?
        Quod, ut optio! Magni commodi eius voluptas officia ut dolor facere veritatis facilis. Libero vitae soluta accusantium quo fugit cum, laborum aspernatur illum corporis repudiandae ipsam maiores eveniet. Iure, saepe.
        Deserunt, officia. Eveniet, provident quibusdam quidem debitis saepe molestiae animi laudantium aspernatur sequi nam consequuntur accusamus distinctio ut repellat esse eos modi sint nostrum temporibus. Animi voluptatibus sequi illo voluptatum!
        Ratione at voluptas dignissimos dicta, cumque qui provident, distinctio, sequi rerum ipsam accusantium adipisci mollitia. Veritatis consequatur explicabo, accusantium quam eum ducimus commodi quod eveniet minus eaque, quidem totam esse?
        Dicta dolor dolores expedita recusandae perspiciatis non maiores vero eum reiciendis corporis, eius, commodi ad. Consequatur illum aut voluptatum voluptas provident dolorem corrupti? Delectus, nesciunt. Architecto odit molestias animi officia?
        Atque itaque nihil cupiditate omnis magnam! Minus dignissimos ipsa blanditiis repellat obcaecati, iusto ab in fugit praesentium ut totam provident soluta voluptates officiis iste assumenda perspiciatis dolores exercitationem laudantium amet.
        Accusamus, voluptatem! Aperiam et id quam velit, sed cum repellendus ipsa impedit, ullam est, rem sit hic eum maxime quidem in commodi distinctio. Accusantium itaque debitis quod excepturi velit eum.
        Repudiandae iusto, quo quaerat magnam cupiditate error. Deleniti porro facere esse quas molestiae doloribus, quos facilis illum cupiditate quasi at expedita, praesentium possimus explicabo inventore beatae, veniam ex quia dolorem?
        Aliquid ratione nobis, magnam consequuntur eveniet quidem dolore? Totam pariatur culpa odio sapiente cupiditate a perspiciatis perferendis consequuntur quas! Obcaecati, saepe tempore. Sed accusantium ex quod praesentium repellendus, repellat omnis?
        Accusantium officia asperiores vitae veniam tempore obcaecati! Velit corrupti iusto corporis animi impedit ipsa saepe architecto neque sit eaque, nobis eum excepturi explicabo assumenda, omnis quo non provident dolorum cupiditate?
        Velit, modi asperiores et vero tempore inventore iure dicta expedita soluta minima in assumenda corporis adipisci eos voluptatum maiores. Corrupti, alias fuga. Earum aliquid distinctio ipsum aut sequi nobis fuga!
        Aspernatur eveniet natus quae vero velit expedita mollitia tenetur maiores animi, quo molestiae, temporibus id! Deserunt animi quod ab cumque, numquam alias corporis omnis ad aliquid, expedita voluptatibus porro voluptatum!
        Voluptates sunt ipsum harum omnis saepe laborum recusandae odio fugit voluptatum vitae cupiditate similique, doloremque temporibus quod soluta a nemo laudantium sapiente deserunt incidunt inventore amet! Repellat officia assumenda laudantium.
        Accusamus culpa ipsum deleniti consequatur voluptate fugit porro voluptatibus est unde delectus, optio maiores voluptatem veniam quas perspiciatis eos possimus magni repellendus, quibusdam non quam? Ut cum perspiciatis sint saepe?
        Sapiente delectus id explicabo eius corporis placeat blanditiis ullam exercitationem esse debitis tempora laudantium commodi eligendi vel ut vitae deserunt, quasi facilis? Rerum sed architecto, dolore consequatur voluptates quas vel!
        Maiores corporis nulla eligendi est explicabo error facere accusantium iusto quas rem, repudiandae quisquam temporibus nostrum id deleniti commodi odit illum. Corrupti deleniti aspernatur quos consequatur ex, quo pariatur sequi.
        Nemo sint ex amet suscipit nihil ratione sed minima aliquid ducimus voluptate? Consequatur sunt, cupiditate repudiandae fugiat corrupti laudantium a assumenda, aperiam temporibus veniam quam repellat voluptatem corporis officia ab?
        Laborum, quod a. Ipsa aperiam laudantium eius vel autem in earum quam aut, tempore sit sed quos blanditiis et esse recusandae reprehenderit. Incidunt fuga distinctio laboriosam rem voluptas illum et.
        Error cumque maxime asperiores magni, reprehenderit nulla deleniti quaerat consequatur non placeat voluptas minus odit fugit aperiam? Temporibus quidem blanditiis optio perspiciatis ex alias a nostrum, dolorum odio suscipit neque?
        Modi rerum ea earum, adipisci quas voluptas incidunt? Maxime laborum inventore consequuntur, sequi voluptates quis quibusdam accusamus rerum quidem illum, esse beatae ullam autem culpa neque deleniti sit, in rem?
        Fugiat et ipsam, impedit reiciendis facilis vitae repellendus tempora ad velit dolorum amet ipsa dolor veritatis officiis placeat rerum iure corrupti cumque saepe omnis nisi numquam nobis explicabo aut. Dolorum?
        Architecto, vel debitis repellendus eaque hic quis a esse eos fugiat. Reprehenderit quaerat assumenda eveniet numquam odio facere nostrum rerum aliquam provident, quae, dolores consequatur adipisci? Perferendis officia obcaecati dignissimos!
        Ipsa nobis molestias architecto voluptate odio velit, expedita, voluptates delectus perspiciatis quae nisi fugiat omnis iure reiciendis dolores pariatur? Veritatis repudiandae explicabo commodi quae facilis hic itaque vel illo nisi?
        Aspernatur nobis et praesentium eveniet voluptatibus voluptatum voluptatem, nesciunt consectetur eos magnam sed itaque alias temporibus cum illum nisi eaque fugiat labore sit autem debitis possimus explicabo excepturi corrupti? Ex!
        Hic, ad! Cupiditate praesentium non, perspiciatis possimus earum, error fugiat dolor iusto vero facilis ab modi consectetur eos quos totam voluptatum. Incidunt ipsam reiciendis odio veritatis tempora assumenda asperiores dolor?
        Esse sapiente numquam magnam corporis eligendi nam unde quod perferendis, recusandae necessitatibus aliquam laudantium voluptatibus molestias in obcaecati? Nostrum aperiam distinctio quidem modi assumenda perspiciatis dolores itaque quibusdam autem harum.
        Minus corporis itaque, provident sed accusantium quae autem ratione rem quaerat incidunt natus fugit, nulla doloremque culpa repellendus recusandae dolores sunt amet. Assumenda tempora ducimus eum sit, nulla sed minus?
        Magni, iure eligendi temporibus pariatur dolor aliquam vero. Fuga sequi doloremque autem. Eum et beatae, at mollitia enim maiores ipsa aperiam quaerat placeat. Natus placeat iste, nostrum odio cupiditate quisquam!
        Perspiciatis nulla praesentium mollitia laborum, ipsum eum, aut in dicta consectetur distinctio incidunt sapiente, iusto doloremque? Voluptatem, magni quia accusantium quasi perspiciatis, suscipit exercitationem quos quas modi voluptas voluptates accusamus!
        Deserunt dolores temporibus ex nostrum iste error omnis quod cum inventore in quas molestiae adipisci fuga quos at consectetur optio accusantium, voluptatibus sint quia tempora. Quis sint obcaecati est saepe!
        Sint perferendis blanditiis ipsa? Saepe laborum fugiat magnam ex numquam minus at, deserunt suscipit asperiores quia quidem neque est id iure enim ab! A distinctio possimus inventore maiores quod fugiat.
        Sint, dolorem commodi. Distinctio dolorum quae cupiditate debitis, officiis provident unde assumenda labore recusandae non, iusto eos animi architecto eum sapiente ducimus possimus aspernatur temporibus esse quidem? Nisi, possimus harum.
        Officia optio sed natus repudiandae porro, commodi corporis possimus aspernatur est iure et ratione. Aliquam eius magnam, commodi, ea quae nam repellendus, asperiores est facere repellat ut veniam labore cum?
        Qui molestias mollitia adipisci amet sed quaerat suscipit hic deserunt eveniet molestiae autem perspiciatis laudantium tempora veritatis nemo nam at maxime voluptatem, vitae, harum natus. Alias fuga beatae sunt saepe?
        Eum, accusantium! Praesentium error perferendis, fugit dolorem nemo delectus id ab inventore eos, pariatur consequatur nesciunt odio officiis fugiat odit! Repellendus blanditiis hic incidunt cum iste assumenda eaque ipsum dolor!
        Et quae possimus quibusdam dolore unde assumenda nesciunt voluptates error cum alias totam similique sunt ut mollitia, ad itaque, sequi recusandae fuga nihil. Dolorem corrupti ipsum culpa. Molestias, repudiandae tempore?
        Voluptate deserunt ipsam praesentium eligendi nam velit inventore vero, neque adipisci repellendus accusamus optio nihil rerum quam fugit quas aliquam nulla voluptatibus, minima ratione distinctio, explicabo iusto! In, quia laborum!
        Repellendus, id labore magnam tempora neque non, fuga asperiores animi numquam vero ducimus expedita eos ipsum rem possimus, soluta impedit ratione in voluptate distinctio sapiente! Sapiente quo cumque similique nemo.
        Adipisci, natus rem ratione odit voluptas voluptatum voluptatem error iure. In quis aperiam magnam doloremque, perferendis molestias architecto culpa libero dolore voluptas, alias nam voluptatum earum ea! Vitae, repellendus laborum?
        Perferendis harum facere fuga aspernatur debitis cum modi ad delectus, sapiente placeat deleniti enim, nam beatae consectetur, molestiae ipsum? Animi magnam velit quod sunt ipsum tempore quasi quo alias ipsa.
        Perspiciatis nulla sint impedit blanditiis ducimus laborum id eum et placeat? Perferendis, nesciunt quasi! Nihil, at beatae exercitationem quos cum rerum minima saepe repellendus similique corrupti, fugiat neque deserunt consectetur!
        Ipsa necessitatibus accusantium quae nisi, perspiciatis consequuntur possimus voluptates eveniet expedita molestias repellat. Quod minus consectetur ad dolore provident vel ipsum tenetur, autem ut, accusantium qui quasi facilis doloremque ipsam!
        Iusto necessitatibus, earum ad, ipsa rerum commodi nesciunt eos illo hic praesentium modi? Optio officiis est vel ipsa eaque harum? Nulla natus fugiat consequuntur accusantium! Alias consequatur sed unde quae.
        Obcaecati veritatis blanditiis hic ut qui quibusdam voluptate accusamus aperiam ab error eligendi, velit provident esse consectetur quo fugit illum nulla. Esse reiciendis odio deserunt assumenda ducimus enim, quam inventore.
        Sint deleniti enim quae. Quia consequatur, iusto veniam ducimus pariatur eaque consequuntur officia et ullam, dolores nisi quae. Possimus aliquid obcaecati ea cum in, consequuntur nihil aut? Error, architecto atque.
        Ipsa ipsum possimus itaque commodi, odit nobis temporibus. Facilis, rem eveniet consequuntur similique accusantium porro nostrum vel id architecto exercitationem ad. Ducimus consequuntur reprehenderit expedita perferendis quis incidunt quam? Totam.
        Ab temporibus laborum laboriosam iusto ut libero, nobis animi sunt quas vitae illo eos unde mollitia earum quam molestias dicta, nostrum ad quibusdam error voluptates doloribus. Eveniet unde accusamus blanditiis?
        Rem error alias ipsa, ex maiores praesentium expedita. Adipisci voluptatibus odio ex sit in, non esse reiciendis quidem tenetur maiores dolore vero suscipit veniam enim rem totam autem. Dignissimos, voluptatum!
        Similique, amet exercitationem? Explicabo repudiandae sapiente soluta et sequi ipsam non quas ullam odit eius, eligendi, omnis ad aspernatur dicta, iure vel dolores architecto sit minima ducimus. Ratione, quisquam ducimus?
        Totam, sequi ratione placeat nisi id perferendis quam aliquam qui aperiam voluptatem repellat hic, rem labore facilis, harum delectus tenetur ut nostrum repellendus adipisci porro? Quod magnam similique maiores beatae.
        Sequi suscipit, quo delectus doloremque quia, molestiae, inventore ea cum iusto cumque ullam iste vel hic tenetur tempora aliquid non incidunt quae. Distinctio, unde sint! Pariatur cum sequi dignissimos fugit.
        Vel est sapiente distinctio repudiandae, assumenda fugiat deleniti, impedit alias voluptatum quaerat dolorem eligendi ullam sit adipisci. Blanditiis adipisci quae id velit. Illum veritatis nostrum nesciunt consequatur vel explicabo eaque!
        Repellendus, quasi nisi iure dolor culpa nostrum, sapiente perspiciatis temporibus necessitatibus eius aspernatur cum dignissimos, at ut! Fugit hic modi inventore! Hic fugiat laboriosam necessitatibus explicabo atque. Sunt, cumque culpa?
        Maiores beatae exercitationem neque aliquam nihil magni quas voluptates praesentium eveniet impedit, earum, cum officiis nam iure! Exercitationem a in veritatis reiciendis enim, placeat facilis eius quod iusto esse. Vitae.
        Odio quae blanditiis atque magni animi harum rerum dolorum asperiores. Doloribus inventore autem accusamus labore aperiam in perferendis aliquam sunt accusantium ab. Impedit voluptatibus eum assumenda quas nisi fuga cupiditate.
        Quam laudantium dolorem architecto totam ipsum assumenda voluptas fugit, voluptate ratione! Iure expedita enim alias velit veniam nesciunt sint sapiente in! Illo id culpa soluta iste illum autem commodi molestiae.
        Sunt odit facere provident, hic molestiae quos tenetur nam. Eaque culpa amet consequuntur assumenda modi reiciendis quia impedit aliquam blanditiis aspernatur. Dolor possimus quo voluptatem porro quod aspernatur modi beatae!
        Voluptate voluptates ducimus tempore, omnis vel eius libero? Velit totam recusandae placeat. Cumque eos neque soluta. Totam impedit non eligendi atque ipsam mollitia, neque repellendus aut nostrum unde esse laudantium.
      </div>
    </section >
  )
  let increasePoint = () => {
    book.point++;
  }
  let decreasePoint = () => {
    book.point--;
  }
}

